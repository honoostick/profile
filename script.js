function printPage() {
  //   const w = window.open("print", "_blank");
  //   var content = window.document.body.innerHTML;
  //   var styles = Array.from(window.document.styleSheets)[0];
  //   var styleText = Array.from(styles.rules).filter(rule => [".print-content"].includes(rule.selectorText)).map(rule => rule.cssText).join(';')
  //   w.document.head.innerHTML = `<style>${styleText}</style>`
  //   w.document.write(content);
  //   w.document.close();
  //   w.print();
  //   w.close();
  // window.frames["print_frame"].document.body.innerHTML='<link href="style.css" rel="stylesheet" type="text/css"><link rel="stylesheet" href="inherit.css">' + document.body.innerHTML;
  // window.frames["print_frame"].window.focus();
  // window.frames["print_frame"].window.print();

  window.print();
}
