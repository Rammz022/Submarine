export default class Canvas {
    constructor(options) {
        if (options && options.id) {
            this.canvas = document.getElementById(options.id);
            this.context = this.canvas.getContext('2d');
            //Настройки размера окна
            this.canvas.width = options.width || 2000;
            this.canvas.height = options.height || 1000;
        }
    }

    //Очистить экран
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //нарисовать изображение
    drawImage(img, x, y) {
        this.context.drawImage(img, x, y);
    }

    drawImageScale(img, x = 0, y = 0, width = img.width, height = img.height, sx = 0, sy = 0, swidth = img.width, sheight = img.height) {
        this.context.drawImage(img, x, y, width, height, sx, sy, swidth, sheight);
    }

    drawText(text, x, y, color) {
        this.context.fillStyle = color;
        this.context.font = "15px serif";
        this.context.fillText(text, x, y, 50);
    }

    drawRect(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }
}