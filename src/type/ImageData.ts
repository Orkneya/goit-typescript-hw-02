export interface Image {
  id: string | number;
  alt_description?: string;
  urls: {
    small: string;
    regular: string;
  };
}
