import React, { useEffect, useState } from "react";
import {
  quantidadeVendasExport,
  ValorTotalVendasExport
} from "app/modules/newhome/components/tabela/conteudostabela/conteudotabelatrinta";
import {detectMob} from "app/shared/layout/footer/footermobile";

export let ValorTotalVendasExportCinco = 0
export const quantidadeVendasExportCinco = []


export default function CorpoTabelaCinco(props) {
  const datas = []
  const valorVendas = []
  let ValorTotalVendas = 0
  const datasMomento = []
  const quantidadeVendas = []
  let quantTotalVendas = 0
  const dia = []
  const mes = []
  const ano = []
  const dataCorreta = []
  const dataAtual = new Date()
  const dataInicioCinco = new Date()
  const vientedois = []
  dataAtual.setDate(dataAtual.getDate() - 1)
  dataInicioCinco.setDate(dataAtual.getDate() - 30)

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].status === "Aprovado" || props.data[i].status === "Transferido") {
      if (!datasMomento.includes(props.data[i].transactionDate.substring(0,10))) {
        datasMomento.push(props.data[i].transactionDate.substring(0,10))
      }
    }
  }
  datasMomento.sort().reverse()
  //for que realiza a filtragem das datas, removendo ocorrencias repetidas
  for (let n = 0; n < datasMomento.length; n++) {
    datas.push(new Date(datasMomento[n]))
  }

  //for que seta os valores das matrizes para 0
  for (let p = 0; p < datas.length; p++) {
    valorVendas[p] = 0
    quantidadeVendas[p] = 0
  }

  //for que realiza a filtragem dos dados por data
  for (let a = 0; a < datasMomento.length; a++) {
    for (let b = 0; b < props.data.length; b++) {
      const Datatransacao = props.data[b].transactionDate.substring(0,10)
      if ((datasMomento[a] === Datatransacao)&&(props.data[b].status==="Aprovado"||props.data[b].status==="Transferido")) {
        valorVendas[a] = (parseFloat(String(valorVendas[a])) + parseFloat(props.data[b].amountSale===0?props.data[b].amountWithdraw:props.data[b].amountSale))
        quantidadeVendas[a] = quantidadeVendas[a] + 1
        if(Datatransacao==="2022-06-22"){
          vientedois.push(props.data[b])
        }
      }
    }

  }
  //for para pegar o dia, mes e ano
  for (let b = 0; b < datas.length; b++) {
    dia.push(datas[b].getDate()+1)
    mes.push(datas[b].getMonth() + 1)
    ano.push(datas[b].getFullYear())
  }

  //for para colocar em ordem DD/MM/AAAA
  for (let c = 0; c < datas.length; c++) {
    const dataTotal = (dia[c] === 32 ? '01' :  String(dia[c]).padStart(2, '0') ) + "/" + (dia[c] === 32 ? String(mes[c] +1).padStart(2, '0') : String(mes[c]).padStart(2, '0') ) + "/" + (mes[c] === 13 ? ano[c] + 1 : ano[c])
    dataCorreta.push(dataTotal)

  }


  //for para somar todos os valores das vendas
  for (let d = 0; d < valorVendas.length; d++) {
    ValorTotalVendas += parseFloat(valorVendas[d])
  }
  ValorTotalVendasExportCinco = ValorTotalVendas

  //for para somar todas as quantidades
  for (let e = 0; e < quantidadeVendas.length; e++) {
    quantTotalVendas += parseFloat(quantidadeVendas[e])
  }
  quantidadeVendasExportCinco.push(quantTotalVendas)




    const [data, setData] = useState(props.data);

    return (

        <tbody className="CorpoTabela">
            <div className="ContainerEstabelecimentos">
                {dataCorreta.map((d) => (
                    <tr className="tr2" key={d.id} style={{paddingLeft:!detectMob()?"60px":"15px"}}>
                        <td className="td1" >{d}</td>
                    </tr>
                ))}
            </div>
            <div className="ContainerValorSoma">
                {quantidadeVendas.map((d) => (
                    <tr className="tr2" key={d.id} style={{paddingLeft:!detectMob()?"85px":"54px"}}>
                        <td className="td1" >{d}</td>
                    </tr>
                ))}
            </div>
            <div className="ContainerNumeroDeVendas">
                {valorVendas.map((d) => (
                    <tr className="tr2" key={d.id}>
                        <td className="td1" style={{paddingLeft:!detectMob()?"30px":"25px",fontSize:!detectMob()?"":"11px"}} >R$ {d.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                ))}
            </div>
        </tbody>
    )
}
