import Quill from "quill";
import EmojiBlot from "./format-emoji-blot";
import EmojiMap from "./emoji-map";
import ShortNameEmoji from "./module-emoji";
import ToolbarEmoji from "./module-toolbar-emoji";
import TextAreaEmoji from "./module-textarea-emoji";
import "./scss/quill-emoji.scss";

export { EmojiMap };

Quill.register(
  {
    "formats/emoji": EmojiBlot,
    "modules/emoji-shortname": ShortNameEmoji,
    "modules/emoji-toolbar": ToolbarEmoji,
    "modules/emoji-textarea": TextAreaEmoji
  },
  true
);

export default { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji };
