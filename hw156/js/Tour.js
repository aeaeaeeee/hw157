AFRAME.registerComponent("tour", {
    init: function () {
      this.comicsContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "flash",
          title: "Flashpoint",
          url: "./assets/flash.jpg",
        },
        {
          id: "indiana-jones",
          title: "Indiana Jones Vol. 1",
          url: "./assets/indianajones.jpg",
        },
  
        {
          id: "sonic",
          title: "Sonic Strikes, Ed. 277",
          url: "./assets/sonic.jpg",
        },
        {
          id: "superman",
          title: "The Adventures of Superman",
          url: "./assets/superman.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position, item.id);
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.comicsContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#0e3e66",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      
      return entityEl;
    },
  });
  