const magnetStyle = document.createElement('style')
magnetStyle.innerHTML = `.lm__border {
  outline: aqua 2px dashed;
}`
document.getElementsByTagName('head')[0].appendChild(magnetStyle)

let target: HTMLElement | null = null

document.onmousemove = function (e) {
  let bt = target
  if (target != e.target) {
    target = e.target as HTMLElement
  }
  if (bt != null) {
    bt.classList.remove('lm__border')
  }
  if (target != null && !target.classList.contains('lm__border')) {
    target.classList.add('lm__border')
  }
}