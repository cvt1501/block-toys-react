export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: Array<BlockType>
}

export interface BlockAtttributesType {
  index: number;
  timestamp: number;
  data: string;
  'previous-hash': string;
  hash: string;
}

export interface BlockType {
  id: string;
  type: string;
  attributes: BlockAtttributesType;
}



