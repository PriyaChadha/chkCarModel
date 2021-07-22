AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "C:\Users\ACER\Downloads\PRO-VR-C151-master\PRO-VR-C151-master\assets\car\scene.gltf" }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});

// Relative Path: PRO-VR-C151-master\assets\car\scene.gltf
//Full Path: C:\Users\ACER\Downloads\PRO-VR-C151-master\PRO-VR-C151-master\assets\car\scene.gltf
