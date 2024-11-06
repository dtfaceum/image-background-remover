// @types/image-background-remover/index.d.ts

declare module "image-background-remover" {
  export function removeBackgroundImage(
    image: string,
    timeout: number
  ): Promise<Blob | null>;
}
