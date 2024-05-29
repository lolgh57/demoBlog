<script setup lang="ts">
import { ref, onBeforeUnmount, unref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'

const editor = useEditor({
    editorProps: {
        attributes: {
            class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl min-h-96 focus:outline-none",
        },
    },
    content: "<h1 class='text-3xl'>Вы на правильном пути!🎉</h1><p>TipTap легко интегрируется, настраивается и стилизуется. Куча дополнений типо таблиц, картинки, я добавил мало кнопочек, там больше. Вот ссылка - https://tiptap.dev/docs/editor/introduction</p>",
    extensions: [
        TiptapStarterKit,
        TiptapPlaceholder.configure({
            emptyEditorClass: "is-editor-empty",
            placeholder: "Write your post content here",
        }),
        TiptapCodeBlock.configure({
            HTMLAttributes: {
                class: 'code-block',
            },
        })
],
})
const isMenuOpen = ref(false)
const editorStyles = "bg-header w-full text-secondary-foreground p-4 rounded-lg border border-secondary-foreground min-h-96"
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

onBeforeUnmount(() => {
  const editorInstance = unref(editor)
  if (editorInstance) {
    editorInstance.destroy()
  }
})
</script>
<template>
    <div class="flex flex-row gap-4">
      <div v-if="editor">
        <UiButton @click="toggleMenu" class="mb-2 menu-toggle bg-header text-secondary-foreground border border-secondary-foreground w-full">
            Выбрать блок
        </UiButton>
        <div v-show="isMenuOpen" class="menu flex flex-col max-h-60 overflow-auto gap-2 bg-header border border-secondary-foreground p-5">
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') } "
                >
                <font-awesome icon="bold" class="text-muted-foreground"/>
                Bold
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
                >
                <font-awesome icon="italic" class="text-muted-foreground"/>
                Italic
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
                >
                <font-awesome icon="strikethrough" class="text-muted-foreground"/>
                Strike
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
                >
                <font-awesome icon="code" class="text-muted-foreground"/>
                Code
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().unsetAllMarks().run()">
                <font-awesome icon="eraser" class="text-muted-foreground"/>
                Clear marks
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().clearNodes().run()">
                <font-awesome icon="eraser" class="text-muted-foreground"/>
                Clear nodes
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }"
                >
                <font-awesome icon="font" class="text-muted-foreground"/>
                Paragraph
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h1
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h2
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h3
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h4
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h5
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
                >
                <font-awesome icon="heading" class="text-muted-foreground"/>
                h6
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }"
                >
                <font-awesome icon="list-ul" class="text-muted-foreground"/>
                Bullet list
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }"
                >
                <font-awesome icon="list-ol" class="text-muted-foreground"/>
                Ordered list
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }"
                >
                <font-awesome icon="code" class="text-muted-foreground"/>
                Code block
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                    @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'is-active': editor.isActive('blockquote') }"
                >
                <font-awesome icon="quote-left" class="text-muted-foreground"/>
                Blockquote
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setHorizontalRule().run()">
                <font-awesome icon="window-minimize" class="text-muted-foreground"/>
                Horizontal rule
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setHardBreak().run()">
                <font-awesome icon="square-caret-down" class="text-muted-foreground"/>
                New line
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()"
                >
                <font-awesome icon="rotate-left" class="text-muted-foreground"/>
                Undo
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()"
                >
                <font-awesome icon="rotate-right" class="text-muted-foreground"/>
                Redo
            </button>

        </div>
      </div>
      <TiptapEditorContent :editor="editor" :class=editorStyles />
    </div>
  </template>

<style scoped lang="css">
.tiptap .ProseMirror{
    min-height: 24rem;
}
.tiptap .ProseMirror:focus-visible{
    outline: none;

}

</style>
  
 