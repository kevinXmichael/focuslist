export default async function boot() {
  return await Promise.allSettled([
    doHTMLvoodoo(),
    initGlobalFunctions(),
    setInnerViewport()
  ])
}

function initGlobalFunctions() {
  Array.prototype.allEqual = function () {
    return new Set(this).size == 1
  }

  Array.prototype.isEmpty = function () {
    return this.length <= 0
  }

  Array.prototype.isNotEmpty = function () {
    return !this.isEmpty()
  }

  //   Array.prototype.random = function() {
  //     return this[Math.floor(Math.random() * this.length)]
  //   }

  Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - 0.5)
  }

  String.prototype.isEmpty = function () {
    return !this || this.length <= 0
  }

  String.prototype.isNotEmpty = function () {
    return !this.isEmpty()
  }

  // if string is empty this return false
  String.prototype.isOnlyWhitespace = function () {
    return !this || this.trim().length <= 0
  }
}

function setInnerViewport() {
  const vh = window.innerHeight * 0.01
  const vw = window.innerWidth * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
  document.documentElement.style.setProperty("--vw", `${vw}px`)
}

function doHTMLvoodoo() {
  window.addEventListener("resize", setInnerViewport)

  const hacker = "%cHey hacker 🔥"
  console.info(hacker, "color: red; font-size: medium")

  // https://patorjk.com/software/taag/#p=display&f=Small&t=focuslist
  const focuslist_ = String.raw`
   __                 _ _    _   
  / _|___  __ _  _ __| (_)__| |_ 
 |  _/ _ \/ _| || (_-< | (_-<  _|
 |_| \___/\__|\_,_/__/_|_/__/\__|
                                                                           
`
  console.info(`%c${focuslist_}`, `color: var(--secondary); font-size: medium`)
  const focuslist = document.createComment(focuslist_)
  document.prepend(focuslist)
}
