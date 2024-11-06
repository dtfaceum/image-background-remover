import { removeBackground } from "@imgly/background-removal";

async function removeBackgroundWithTimeout(image, timeout) {
  const result = await Promise.race([
    removeBackground(image),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Error removing image background.")),
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

export async function removeBackgroundImage(image, timeout) {
  try {
    const result = await removeBackgroundWithTimeout(image, timeout);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
