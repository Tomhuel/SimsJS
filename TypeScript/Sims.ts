class Persona {
    private name: string;
    private button: Element;
    private selected: boolean;

    constructor(name, button, selected) {
        this.name = name;
        this.button = button;
        this.selected = selected;
    }

    /**
     * Funcion que cambia el estado de la persona de seleccionado o no seleccionado según si antes lo estaba o no
     * Además, cambia la clase correspondientemente si estaba seleccionado o no para marcar en azul la interfaz
     */
    changeState() {
        if (this.selected) {
            this.selected = false;
            this.button.classList.remove("btnCharacterSelected");
            this.button.classList.add("btnCharacter");
        } else {
            this.selected = true;
            this.button.classList.remove("btnCharacter");
            this.button.classList.add("btnCharacterSelected");
        }
    }

    getName() {
        return this.name;
    }

    getState() {
        return this.selected;
    }
}


class Room {
    private name: string;
    private button: Element;
    private actions: Array<string>;

    constructor( name, button, actions ) {
        this.name = name;
        this.button = button;
        this.actions = actions;
    }

    roomActions() {
        let characters = new Array( Carlos, Gonzalo, Luisa, Fernando, Amacio, Carolina );
        let charactersSelected = new Array();
        const logger = document.getElementById("log");

        for ( let i = 0; i < characters.length; i++ ) {
            if ( characters[i].getState() ) {
                charactersSelected.push(characters[i]);
            }
        }

        for ( let i = 0; i < charactersSelected.length; i++ ) {
            this.roomMessage( this.randomizer(), logger, charactersSelected[i] );
        }

        


    }

    randomizer() {
        let nRandom = Math.floor( Math.random() * 4 );
        this.actions[ nRandom ];
    }

    roomMessage( action, logger, character ) {
        if ( this.name == "Cocina" ) {
            logger.innerHTML += character + " " + action + " en la " + this.name + " | <br>";
        }
    }
}







    let CarlosButton = document.getElementById("Carlos");
    let GonzaloButton = document.getElementById("Gonzalo");
    let LuisaButton = document.getElementById("Luisa");
    let FernandoButton = document.getElementById("Fernando");
    let AmacioButton = document.getElementById("Amacio");
    let CarolinaButton = document.getElementById("Carolina");

    let Carlos = new Persona("Carlos", CarlosButton, false);
    let Gonzalo = new Persona("Gonzalo", GonzaloButton, false);
    let Luisa = new Persona("Luisa", LuisaButton, false);
    let Fernando = new Persona("Fernando", FernandoButton, false);
    let Amacio = new Persona("Amacio", AmacioButton, false);
    let Carolina = new Persona("Carolina", CarolinaButton, false);

    let SalonButton = document.getElementById("Salon");
    let CocinaButton = document.getElementById("Cocina");
    let BanioButton = document.getElementById("Baño");
    let DormitorioButton = document.getElementById("Dormitorio");

    let Salon = new Room("Salón", SalonButton, ["se recostó en el sofá", "encendió la televisión para empezar a hacer zumba", "se puso a jugar a la Xbox", "se puso a ver Juego de Tronos"]);
    let Cocina = new Room("Cocina", CocinaButton, ["cocinó una tortilla española con cebolla", "robó un paquete de galletas", "bebió agua", "comió el gofio"]);
    let Banio = new Room("Banio", BanioButton, ["se lavó los dientes", "se duchó", "se limpió el culo con el bidé", "se peinó"]);
    let Dormitorio = new Room("Dormitorio", DormitorioButton, ["durmió", "se cambió de ropa", "ordenó el dormitorio", "vió videos de IlloJuan en la cama"]);