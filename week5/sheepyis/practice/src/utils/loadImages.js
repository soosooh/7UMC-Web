const imageImport = import.meta.glob('../assets/images/*.jpg', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../assets/images/', '').replace('.jpg', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});