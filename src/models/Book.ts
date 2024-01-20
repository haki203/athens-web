// types.ts

export interface Book {
    _id: string;
    title: string;
    authorId: string;
    categoryId: string;
    description: string;
    image:string;
    disable:boolean;
    free:boolean;
    rate: number;
    // Thêm các thuộc tính khác tùy ý
  }
  