document.addEventListener('DOMContentLoaded', () => {
    const addModelButton = document.getElementById('add-model');
    const removeModelButton = document.getElementById('remove-model');
    const modelViewerContainer = document.getElementById('model-viewer-container');

    addModelButton.addEventListener('click', () => {
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('src', 'mouch.glb');
        modelViewer.setAttribute('ios-src', 'mouch.usdz');
        modelViewer.setAttribute('alt', 'A 3D model of a mouch');
        modelViewer.setAttribute('ar', '');
        modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
        modelViewer.setAttribute('environment-image', 'neutral');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewerContainer.appendChild(modelViewer);
    });

    removeModelButton.addEventListener('click', () => {
        const modelViewers = modelViewerContainer.getElementsByTagName('model-viewer');
        if (modelViewers.length > 0) {
            modelViewerContainer.removeChild(modelViewers[modelViewers.length - 1]);
        }
    });
});
