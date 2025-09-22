export interface ArticleBase {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'article' | 'pdf';
}

export interface Article extends ArticleBase {
  type: 'article';
  externalLink: string;
  thumbnail: string;
}

export interface PdfArticle extends ArticleBase {
  type: 'pdf';
  pdfLink: string;
}

export type ArticleType = Article | PdfArticle;
