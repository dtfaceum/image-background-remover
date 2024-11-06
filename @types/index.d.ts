// @types//index.d.ts
declare module "image-background-remover" {
  export function removeBackgroundImage(
    image: Blob,
    timeout: number
  ): Promise<Blob | null>;
}
