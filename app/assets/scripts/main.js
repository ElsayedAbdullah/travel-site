import MobilMenu from "./modules/MobilMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";
import Modal from "./modules/Modal";

var mobilMenu = new MobilMenu(); // new instance of object
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();
var modal = new Modal();
