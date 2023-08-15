export interface Warehouse {
  code: string
  label: string
}

export const warehouses: Warehouse[] = [
  {code: "CDS1", label: "CDiscount Cestas"},
  {code: "OBL1", label: "Oberlin Industries Bordeaux"},
  {code: "OBL2", label: "Oberlin Industries Paris"},
  {code: "INT1", label: "Intermarché Bordeaux"},
  {code: "CHAT", label: "Château Haut Brion"}]
