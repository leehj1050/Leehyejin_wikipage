export interface DataType {
  title: string;
  content: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
  id: string;
}

export interface PropIdType {
  params: {
    id: string;
  };
}

export interface CommonType {
  id: string;
}
