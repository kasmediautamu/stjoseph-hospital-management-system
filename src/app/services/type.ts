export interface WORKTYPE {
  id: number
  account_number: string
  patient_name:string
  payment_status: string
  contract_name: string
  payer_id: number | string
  service_category:string
  ai_score: number
  admission_date: string
  discharge_date:string
  Adj_total_charges:string
  exp_reimburse:string
}

export interface COLUMNTYPE {
  account_number: string
  patient_name:string
  payment_status: string
  contract_name: string
  payer_id: string
  service_category:string
  ai_score: number
  admission_date: string
  discharge_date:string
  Adj_total_charges:string
  exp_reimburse:string
}

export interface STATETYPE {
  name:string
}
