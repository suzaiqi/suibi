export default function(el,styles) {
    for(var key in styles) {
        el.style[key] = styles[key];
    }
}