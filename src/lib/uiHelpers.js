export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const screenDimensions = () => {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}