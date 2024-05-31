<script setup lang="ts">
import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/vue-3'
const isMenuOpen = ref(false)
const isSelectMenuOpen = ref(false)
const menuPosition = ref({ top: 0, left: 0 })
const editorStyles = "bg-header w-full text-secondary-foreground p-4 rounded-lg border border-secondary-foreground min-h-96"

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
            placeholder: "Select block",
        }),
        TiptapCodeBlock.configure({
            HTMLAttributes: {
                class: 'code-block',
            },
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        })
],
})

function handleSelectionChange() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        const centerX = (rect.left + rect.right) / 2;

        const menu = document.querySelector('.cursor-toolbar') as HTMLElement;
        if (menu) {
            const menuWidth = menu.offsetWidth;

            const menuLeft = centerX - menuWidth / 2;

            const menuTop = rect.bottom;

            isSelectMenuOpen.value = true;
            menuPosition.value = {
                top: menuTop,
                left: menuLeft
            };
        }
    } else {
        isSelectMenuOpen.value = false;
    }
}

onBeforeUnmount(() => {
    document.removeEventListener('selectionchange', handleSelectionChange)
    const editorInstance = unref(editor)
    if (editorInstance) {
        editorInstance.destroy()
    }
})
onMounted(() => {
    document.addEventListener('selectionchange', handleSelectionChange)
})
</script>
<template>
    <div class="flex sm:flex-col-reverse lg:flex-row items-top justify-center gap-3 max-w-[1240px] m-auto editor-layout">
        <div v-if="editor" class="editor-toolbar flex flex-col gap-2">
            <div class="cursor-pointer px-4 text-sm py-1 bg-header text-secondary-foreground border border-dashed rounded-lg border-secondary-foreground w-full h-fit">
                <p class="text-lg">Select block</p>
                <div class="menu flex flex-col max-h-60 min-w-[250px] overflow-auto gap-2 bg-header p-2">
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
                        <font-awesome icon="minus" class="text-muted-foreground"/>
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
            <div class="meta-data-conteiner px-4 text-sm py-1 bg-header text-secondary-foreground border border-dashed rounded-lg border-secondary-foreground w-full h-fit">
                <p class="text-lg">Specify metadata</p>
                <div class="meta-data flex flex-col gap-2 p-2">
                    <div class="meta-data-author">
                        <label for="author">Author:</label>
                        <UiInput type="text" placeholder="Whrite author" id="author" class="mb-5"/>
                    </div>
                    <div class="meta-data-tags">
                        <label for="tags">Tags:</label>
                        <UiInput type="text" placeholder="Whrite tags" id="tags" class="mb-5"/>
                    </div>
                </div>
            </div>
            <div class="send-button">
                <UiButton variant="secondary" class="w-full bg-header hover:bg-secondary border border-dashed border-secondary-foreground ">Send</UiButton>
            </div>
        </div>
        <TiptapEditorContent :editor="editor" :class="editorStyles" class="editor-textarea min-h-96 h-fit" />
        <div v-if="editor" v-show="isSelectMenuOpen" class="cursor-toolbar flex flex-row flex-wrap w-fit absolute z-[1] bg-header border border-dashed border-secondary-foreground rounded p-3" :style="{ position: 'absolute', top: menuPosition.top + 'px', left: menuPosition.left + 'px' }">
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') } "
                >
                <font-awesome icon="bold" class="text-muted-foreground"/>
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
                >
                <font-awesome icon="italic" class="text-muted-foreground"/>
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
                >
                <font-awesome icon="strikethrough" class="text-muted-foreground"/>
            </button>
            <button
                class="text-left hover:bg-secondary px-2 py-1 rounded transition-all"
                @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
                >
                <font-awesome icon="code" class="text-muted-foreground"/>
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                <font-awesome icon="align-left" class="text-muted-foreground"/>
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                <font-awesome icon="align-center" class="text-muted-foreground"/>
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                <font-awesome icon="align-right" class="text-muted-foreground"/>
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                <font-awesome icon="align-justify" class="text-muted-foreground"/>
            </button>
            <button class="text-left hover:bg-secondary px-2 py-1 rounded transition-all" @click="editor.chain().focus().clearNodes().run()">
                <font-awesome icon="eraser" class="text-muted-foreground"/>
            </button>
            
        </div>
    </div>
  </template>

<style scoped lang="css">
        .menu{
            scrollbar-width: none;
        }
</style>
  
 