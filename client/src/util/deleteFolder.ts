const fs = require('fs');
const path = require('path');

export async function deleteFolderRecursive(folderPath: string): Promise<void> {
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // Check if the directory is named "assets"
                if (file === "assets") {
                    continue; // Skip this subfolder
                }
                await deleteFolderRecursive(curPath); // Recursively process subfolders
            } else {
                fs.unlinkSync(curPath); // Delete the file
            }
        }
    }
}

(async () => {   
    await deleteFolderRecursive("test_results");
})();
