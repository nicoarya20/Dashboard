import { hookstate } from "@hookstate/core"
import { IGlobalTema } from "./type_global"
import { RefObject } from "react"

export const pwd_key_config = "fchgvjknlmdfnbvghhujlaknsdvjbhknlkmsdbdyu567t8y9u30r4587638y9uipkoeghjvuyi89ipkoefmnrjbhtiu4or9ipkoemnjfbhjiuoijdklnjhbviufojkejnshbiuojijknehgruyu"
export const globalRole = hookstate<string>('')
export const DIR = {
   task: "cm0xhcqf0000dacbbixjb09yn",
   project: "cm0xhc9sv000bacbb7rfikw1k",
   document: "cm0xhbkf50009acbbtw03qo4l",
   village: "cm0xhb91o0007acbbkx8rk8hj",
   user: "cm0x8dbwn0005bp5tgmfcthzw",

}

export const TEMA = hookstate<IGlobalTema>({
   utama: "#19345E",
   bgUtama: "#F4F9FD",
   bgIcon: "#384288",
   bgFiturHome: "#FCAA4B",
   bgFiturDivision: "#FCAA4B",
   bgTotalKegiatan: "#DCEED8",
})

export const globalNotifPage = hookstate({
   load: false,
   category: ''
})

export const currentScroll = hookstate<RefObject<HTMLDivElement> | null>(null);