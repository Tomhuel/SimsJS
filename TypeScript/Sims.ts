class Character {
    
    private name: string; // Character's name
    private button: HTMLElement; // Character's Button Element
    private selected: boolean; // Character's Selected or not

    /**
     * Metodo constructor para la clase persona. 
     * @param name nombre del personaje
     * @param button boton del personaje
     * @param selected estado del personaje si esta seleccionado o no
     */
    constructor(name: string, button: HTMLElement, selected: boolean) {
        this.name = name;
        this.button = button;
        this.selected = selected;
    }

    /**
     * Funcion que cambia el estado de la persona de seleccionado o no seleccionado según si antes lo estaba o no
     * Además, cambia la clase correspondientemente si estaba seleccionado o no para marcar en azul la interfaz
     */
    changeState() : void {
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

    /**
     * Funcion get de la variable name
     * @returns string | nombre de la persona
     */
    getName() : string {
        return this.name;
    }

    /**
     * Funcion get de la variable selected
     * @returns boolean | estado de seleccion de personaje
     */
    getState() : boolean {
        return this.selected;
    }
}


class Room {
    private name: string; // Room's name
    private actions: Array<string>; // Room's actions

    /**
     * Metodo constructor para la clase Room
     * @param name Nombre de la habitacion
     * @param actions Acciones posibles en la habitacion
     */
    constructor( name: string, actions: Array<string> ) {
        this.name = name;
        this.actions = actions;
    }

    /**
     * Metodo main para imprimir las actividades de los personajes en la habitacion actual
     * Comprueba cuales personajes estan seleccionados, para despues imprimir un mensaje
     * en el elemento log
     */
    roomActions() : void {
        let characters = new Array( Carlos, Gonzalo, Luisa, Fernando, Amacio, Carolina ); // All Character's Array
        let charactersSelected = new Array(); // All Characters Selected's Array

        for ( let i = 0; i < characters.length; i++ ) { // for to check all characters
            if ( characters[i].getState() ) {           // If this character is selected
                charactersSelected.push(characters[i]); // add to charactersSelected
            }                                           // if not, continue
        }

        for ( let i = 0; i < charactersSelected.length; i++ ) { // for to print all the characters actions
            this.roomMessage( this.randomizer(this.actions), charactersSelected[i].name ); // print the action "random" in logger for that character
        }
    }

    /**
     * Funcion que devuelve un String con una accion aleatoria de la habitacion actual
     * @param actions Array<string> | Acciones posibles en la habitacion
     * @returns string | Actividad seleccionada aleatoriamente
     */
    randomizer(actions : Array<string>) {
        let nRandom = Math.floor( Math.random() * 4 );
        return actions[ nRandom ];
    }

    /**
     * Metodo que imprime el mensaje correspondiente segun la accion y personaje
     * @param action string | acción determinada que realizo el personaje
     * @param logger HTMLElement | elemento donde se loggean las acciones
     * @param character string | nombre del personaje que hizo la accion
     */
    roomMessage( action, character ) {
        const logger = document.getElementById("log");  // Element log to print the message
        let hour : Date;
        hour = new Date();

        if (logger) {                                   // If logger is not null
            if ( this.name == "Cocina" ) {              // If cocina print a message for cocina
                logger.innerHTML += character + " " + action + " en la " + this.name + " " +hour.getHours() + ":" + hour.getMinutes() + ":" + hour.getSeconds() + "<br>";
            } else {                                    // else print a message for others
                logger.innerHTML += character + " " + action + " en el " + this.name + " " +hour.getHours() + ":" + hour.getMinutes() + ":" + hour.getSeconds() + "<br>";
            }
        }
    }
}

let Carlos : Character;
let Gonzalo : Character;
let Luisa : Character;
let Fernando : Character;
let Amacio : Character;
let Carolina : Character;

const CarlosButton = document.getElementById("Carlos");
const GonzaloButton = document.getElementById("Gonzalo");
const LuisaButton = document.getElementById("Luisa");
const FernandoButton = document.getElementById("Fernando");
const AmacioButton = document.getElementById("Amacio");
const CarolinaButton = document.getElementById("Carolina");

let charactersButtons : Array<HTMLElement | null>
charactersButtons = [CarlosButton, GonzaloButton, LuisaButton, FernandoButton, AmacioButton, CarolinaButton];


//
if (CarlosButton && GonzaloButton && LuisaButton && FernandoButton && AmacioButton && CarolinaButton) {
    Carlos = new Character("Carlos", CarlosButton, false);
    Gonzalo = new Character("Gonzalo", GonzaloButton, false);
    Luisa = new Character("Luisa", LuisaButton, false);
    Fernando = new Character("Fernando", FernandoButton, false);
    Amacio = new Character("Amacio", AmacioButton, false);
    Carolina = new Character("Carolina", CarolinaButton, false);
}

const SalonButton = document.getElementById("Salon");
const CocinaButton = document.getElementById("Cocina");
const BanioButton = document.getElementById("Baño");
const DormitorioButton = document.getElementById("Dormitorio");

let Salon = new Room("Salón", ["se recostó en el sofá", "encendió la televisión para empezar a hacer zumba", "se puso a jugar a la Xbox", "se puso a ver Juego de Tronos"]);
let Cocina = new Room("Cocina", ["cocinó una tortilla española con cebolla", "robó un paquete de galletas", "bebió agua", "comió el gofio"]);
let Banio = new Room("Banio", ["se lavó los dientes", "se duchó", "se limpió el culo con el bidé", "se peinó"]);
let Dormitorio = new Room("Dormitorio", ["durmió", "se cambió de ropa", "ordenó el dormitorio", "vió videos de IlloJuan en la cama"]);