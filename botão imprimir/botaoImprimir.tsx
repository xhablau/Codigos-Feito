onClick={() => { GerarPdfQRCode2(amount, seller, contentDataURL, "", Imprimirpix, transactionType, 0) }}

export function GerarPdfQRCode2(amount, seller, contentDataURL, clientName, Imprimirpix,typeoperation,parcela) {

    const imgData = 'data:image/png;base64,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'
    const imgQrcode = contentDataURL;
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2,'0')
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    const dataAtual = `${dia}/${mes}/${ano}       ${hora}:${minutos}:${segundos}`
    parcela++
  
    const doc = new jsPDF();
    if(Imprimirpix === 1){
      doc.addImage(imgData, 95, 2, 25, 8);
      doc.setFontSize(20);
      doc.setFont(undefined, 'bold');
      doc.text("Operação: "+typeoperation+" !", 70, 30);
      doc.setFontSize(16);
      doc.setFont(undefined, 'normal');
      doc.text("Total:", 32, 70);
      doc.text(amount, 62, 70);
      doc.text("Data:", 32, 80);
      doc.text(dataAtual, 62, 80);
      doc.text("Lojista:", 32, 90);
      doc.text(seller, 62, 90);
      doc.text("QRcode: ", 32, 110);
      doc.addImage(imgQrcode, 62, 130, 100,100)
    }else{
      doc.addImage(imgData, 95, 2, 25, 8);
      doc.setFontSize(20);
      doc.text(typeoperation+": "+parcela+"ª parcela", 70, 30);
      doc.setFontSize(16);
      doc.setFont(undefined, 'normal');
      doc.text("Cliente:",32,60);
      doc.text(clientName,62,60);
      doc.text("Total:", 32, 70);
      doc.text(amount, 62, 70);
      doc.text("Data:", 32, 80);
      doc.text(dataAtual, 62, 80);
      doc.text("Lojista:", 32, 90);
      doc.text(seller, 62, 90);
      doc.text("QRcode: ", 32, 110);
      doc.addImage(imgQrcode, 62, 130, 100,100)
    }
  
  
    doc.save("comprovante.pdf")
  }


