document.addEventListener("DOMContentLoaded", function() {
    const addModelButton = document.getElementById('add-model');
    const removeModelButton = document.getElementById('remove-model');
    const modelViewerContainer = document.getElementById('model-viewer-container');
    let modelCount = 1;

    addModelButton.addEventListener('click', () => {
        modelCount++;
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('id', `model-viewer-${modelCount}`);
        modelViewer.setAttribute('src', 'mouch.glb');
        modelViewer.setAttribute('ios-src', 'mouch.usdz');
        modelViewer.setAttribute('alt', 'A 3D model of a mouch');
        modelViewer.setAttribute('ar', '');
        modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
        modelViewer.setAttribute('environment-image', 'neutral');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewerContainer.insertBefore(modelViewer, modelViewerContainer.querySelector('.controls'));
    });

    removeModelButton.addEventListener('click', () => {
        if (modelCount > 1) {
            const modelViewer = document.getElementById(`model-viewer-${modelCount}`);
            modelViewerContainer.removeChild(modelViewer);
            modelCount--;
        }
    });
});
