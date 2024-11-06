import { removeBackground } from "@imgly/background-removal";

async function removeBackgroundWithTimeout(
  image: Blob,
  timeout: number
): Promise<Blob> {
  const result = await Promise.race([
    removeBackground(image),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Ocorreu um erro ao remover fundo da imagem.")),
        timeout
      )
    ),
  ]);

  if (result instanceof Blob) {
    return result;
  } else {
    throw new Error("Unexpected result type");
  }
}

export async function removeBackgroundImage(
  image: Blob,
  timeout: number
): Promise<Blob | null> {
  try {
    const result = await removeBackgroundWithTimeout(image, timeout);
    return result;
  } catch (e) {
    console.error("Erro ao remover o fundo da imagem:", e);
    return null;
  }
}
