// Eisdealer-Simulator
// Evelin Sinner, 269360, MKB2
// In Zusammenarbeit mit Julia Mamani, Penelope Vogel, Anna-Lena Jörger

namespace EisdieleSimulator{

    // Angebot hat folgende Eigenschaften: Name, Eissorte, Sauce, Topping und Preis
    export interface Angebot{
        name: string;
        sorten: Sorte[];
        sauce: Sauce;
        topping: Topping;
        price: number;
    }

    export type Sorte = 'vanille' | 'schoko' | 'karamell' | 'pistazie' | 'erdbeer' | 'straccia' | 'zitrone'
    export type Sauce = 'karamel' | 'schokolade' | 'himbeere';
    export type Topping = 'keks' | 'sahne' | 'mms';
}


