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

// var shell = new ActiveXObject("WScript.Shell");     
	    //往注册表中写入值
	    // shell.RegWrite("HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\PageSetup\\footer","&b&d","REG_SZ");


  const printBtn = document.getElementById('print');
  printBtn.style.display="none";
  window.print();
  printBtn.style.display="inherit";
}
