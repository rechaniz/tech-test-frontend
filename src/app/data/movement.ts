export interface Product {
  refType: string;
  refNumber: string;
  description: string;
  quantity: number;
  weight: number;
  totalQuantity: number;
  totalWeight: number;
}

export interface Movement {
  id: string;
  declarationTime: string;
  movementTime: string;
  type: string;
  declaredBy: string;
  product: Product;
  customsStatus: string;
  comingFromCode: string;
  comingFromLabel: string;
  goingToCode: string;
  goingToLabel: string;
  customsDocumentType: string | null;
  customsDocumentRef: string | null;
}
