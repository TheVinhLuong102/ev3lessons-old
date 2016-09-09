
  var menuApp = angular.module("MenuApp", []);
if (language == 'es') {
    
    menuApp.controller("MenuCtrl", function($scope) {
                       
                       $scope.Yes = 'Si';
                       $scope.No = 'No';
                       $scope.Title = 'Marcador Animal Allies (v2.0)';
                       $scope.Timers = 'Cronómetros';
                       $scope.Saves = 'Guardados';
                       $scope.Points = ' Puntos';
                       
                       $scope.M01 = 'Transporte del tiburón';
                       $scope.M01a = 'Tanque y Tiburón están completamente dentro de la Zona (caja izquierda)';
                       $scope.M01b = 'Tanque y Tiburón están completamente dentro de la Zona (caja derecha)';
                       $scope.M01c = '¿El Tiburón está tocando únicamente el suelo del tanque?';
                       $scope.M01d = 'Nota: Después del inicio para esta misión, no está permitido que nada, excepto el Tanque, toque en ningún momento el Tiburón.';
                       $scope.M02 = 'Acción del perro lazarillo';
                       $scope.M02a = 'La Valla de Advertencia está bajada';
                       $scope.M02b = 'Nota: La Valla debe estar bajada porque el Robot la ha cruzado completamente desde el oeste, después de transitar entre las Barreras.';
                       $scope.M03 = 'Conservación animal ';
                       $scope.M03a = '¿Cuantas parejas de animales hay en ambas mesas? ';
                       $scope.M03b = 'Nota: Cada pareja debe ser creada por la rotación del Modelo de Misión de Conservación animal. ';
                       $scope.M04 = 'Alimentación';
                       $scope.M04a = '¿Cuántos trozos de Comida está completamente dentro de una Zona para Comida? ';
                       $scope.M04b = 'Nota: Si hay más de un trozo de Comida en una Zona, todas deben coincidir.';
                       $scope.M05 = 'Biomemitismo';
                       $scope.M05a = 'La Pared Biomimética soporta completamente todo el peso de la Salamanquesa Blanca.';
                       $scope.M05b = 'La Pared Biomimética soporta completamente todo el peso del Robot. ';
                       $scope.M05c = 'Nota: Ninguna parte del objeto puede estar en contacto con algo que no sea la Pared Biomimética y/o la Lagartija Verde, exceptuando que los dos objetos puntuables pueden contactar entre ellos.';
                       $scope.M06 = 'Ordeño automático  ';
                       $scope.M06a = '¿Ha salido toda la Leche y todo el Estiércol?  ';
                       $scope.M06b = '¿Ha salido toda la Leche pero nada de Estiércol?  ';
                       $scope.M06c = 'Nota: La Leche y/o el Estiércol salió únicamente por el movimiento del Robot actuando sobre la palanca roja.';
                       $scope.M07 = 'Liberación de pandas';
                       $scope.M07a = '¿La bisagra se observa completamente abierta en sentido horario?  ';
                       $scope.M08 = 'Recuperación de cámaras  ';
                       $scope.M08a = '¿Está la Cámara completamente dentro de la Base?  ';
                       $scope.M09 = 'Adiestramiento e investigación  ';
                       $scope.M09a = 'El Perro y el Adiestrador están completamente dentro de la Zona de Adiestramiento e Investigación';
                       $scope.M09b = 'La Zoóloga está completamente dentro de la Zona de Adiestramiento e Investigación  ';
                       $scope.M09c = '¿Cuántas Muestras de Excrementos están completamente dentro de la Zona de Adiestramiento e Investigación?';
                       $scope.M09d = 'Nota: Solo se puede transportar una Muestra de Excrementos cada vez.  ';
                       $scope.M10 = 'Apicultura ';
                       $scope.M10a = 'La Abeja está sobre la Colmena y no hay Miel en la Colmena.  ';
                       $scope.M10b = 'La Abeja está sobre la Colmena y la Miel está completamente dentro de la Base.  ';
                       $scope.M11 = 'Prótesis ';
                       $scope.M11a = 'La Prótesis está colocada en la Mascota Y no la sostiene el Árbitro.  ';
                       $scope.M11b = 'La Prótesis está colocada en la Mascota Y la Mascota está completamente dentro de la Zona de la Granja.';
                       $scope.M12 = 'Foca en base ';
                       $scope.M12a = 'La Foca está completamente dentro de la Base y no está rota.';
                       $scope.M13 = 'Leche en la base  ';
                       $scope.M13a = 'Las tres unidades de Leche están completamente dentro de la Base.';
                       $scope.M14 = 'Leche en la rampa  ';
                       $scope.M14a = 'La Rampa soporta completamente las tres unidades de Leche.  ';
                       $scope.M14b = 'La Rampa soporta completamente las tres unidades de Leche Y son los únicos objetos que tocan la Rampa.';
                       $scope.M14c = 'La Rampa soporta completamente las tres unidades de Leche Y son los únicos objetos que tocan la Rampa Y todas están de pie.';
                       $scope.M15 = 'Todas las muestras  ';
                       $scope.M15a = 'Las siete Muestras de Excrementos están completamente dentro de la Zona de Adiestramiento e Investigación  ';
                       $scope.Penalty = 'Penalizaciones  ';
                       $scope.Penaltya = '¿Cuántas Muestras de Excrementos están dentro del triángulo blanco?  ';
                       
                       });
} else if (language == 'de') {

    menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Ja';
      $scope.No = 'Nein';
      $scope.Title = 'Animal Allies Punkterechner (v2.0)';
      $scope.Timers = 'Timer';
      $scope.Saves = 'Gespeicherte Punktzahlen';
      $scope.Points = 'Punkte';

      $scope.M01 = 'Hai-Transport';
      $scope.M01a = 'Sind das Becken und der Hai komplett am ersten Zielort (linkes Viereck)? ';
      $scope.M01b = 'Sind das Becken und der Hai komplett am zweiten Zielort (rechtes Viereck)? ';
      $scope.M01c = 'Berührt der Hai nur den Beckenboden (nicht die Wände des Beckens)? ';
      $scope.M01d = 'Hinweis: Nie darf etwas den Hai berühren, außer dem Becken!';


      $scope.M02 = 'Assistenzhund';
      $scope.M02a = 'Liegt der Warnzaun waagerecht?';
      $scope.M02b = 'Hinweis: Der Warnzaun liegt waagerecht auf der Matte, weil der Roboter ihn komplett aus westlicher Richtung überquert hat, nachdem er zwischen den Leitplanken durch gefahren ist.';
      $scope.M03 = 'Artenschutz';
      $scope.M03a = 'Wie viele Paare derselben Tierart befinden sich komplett auf der gleichen Seite des Tisches? ';
      $scope.M03b = 'Hinweis:  Jedes Paar muss durch die Drehung des Artenschutzmodells zusammengeführt werden.';
      $scope.M04 = 'Fütterung';
      $scope.M04a = 'Wie viele Futterrationen befinden sich komplett in den Zielbereichen? ';
      $scope.M04b = 'Hinweis: Die Rechtecke in den Tierbereichen gehören nicht zum Zielbereich. Wenn sich mehrere Futterrationen in einem Zielbereich befinden, müssen diese die gleiche Farbe haben.';
      $scope.M05 = 'Bionik';
      $scope.M05a = 'Hängt der weiße Gecko komplett an der Wand';
      $scope.M05b = 'Hängt der Roboter komplett an der Wand? ';
      $scope.M05c = 'Hinweis: Um Punkte zu erzielen, dürfen sowohl der weiße Gecko als auch der Roboter nur mit der Wand und/oder dem grünen Gecko in Berührung sein. Ausnahme: Die beiden Wertungsobjekte dürfen sich gegenseitig berühren.';
      $scope.M06 = 'Melkmaschine';
      $scope.M06a = 'Sind Milch und Kot heraus gerollt? ';
      $scope.M06b = 'Ist die Milch herausgerollt, aber kein Kot? ';
      $scope.M06c = 'Hinweis: Die Milch und/oder der Kot sind nur durch die Bewegung des roten Hebels heraus gerollt.';
      $scope.M07 = 'Panda-Auswilderung ';
      $scope.M07a = 'Ist das Tor vollständig geöffnet (im Uhrzeigersinn)?';
      $scope.M08 = 'Kamera abholen';
      $scope.M08a = 'Befindet sich die Kamera komplett in der Base?';
      $scope.M09 = 'Training und Forschung';
      $scope.M09a = 'Befindet sich der Trainer mit Hund komplett in der Trainings- und Forschungsstation? ';
      $scope.M09b = 'Befindet sich die Zoologin komplett in der Trainings- und Forschungsstation?';
      $scope.M09c = 'Wie viele Kot-Stücke befinden sich komplett in der Trainings- und Forschungsstation?';
      $scope.M09d = 'Hinweis: Es darf immer nur ein Kothaufen transportiert werden.';
      $scope.M10 = 'Bienenzucht';
      $scope.M10a = 'Ist die Biene auf dem Bienenstock und es befindet sich kein Honig mehr im Bienenstock? ';
      $scope.M10b = 'Ist die Biene auf dem Bienenstock und der Honig befindet sich komplett in der Base?';
      $scope.M11 = 'Prothesen';
      $scope.M11a = 'Ist die Prothese am Tier UND wird nicht vom Schiedsrichter gehalten? ';
      $scope.M11b = 'Ist die Prothese am Tier UND das Tier befindet sich komplett im Bereich “Bauernhof”?';
      $scope.M12 = 'Seehund';
      $scope.M12a = 'Befindet sich der Seehund komplett in der Base und ist nicht “verletzt” (zerbrochen)?';
      $scope.M13 = 'Milch in der Base ';
      $scope.M13a = 'Sind die 3 Milchbehälter komplett in der Base?';
      $scope.M14 = 'Milch auf der Rampe ';
      $scope.M14a = 'Werden alle 3 Milchbehälter komplett von der Rampe getragen? ';
      $scope.M14b = 'Werden alle 3 Milchbehälter komplett von der Rampe getragen UND werden sie nur von der Rampe getragen und berührt nichts anderes die Rampe? ';
      $scope.M14c = 'Werden alle 3 Milchbehälter komplett von der Rampe getragen UND werden sie nur von der Rampe getragen und berührt nichts anderes die Rampe UND stehen alle drei aufrecht?';
      $scope.M15 = 'Kot';
      $scope.M15a = 'Befinden sich alle 7 Kothaufen komplett in der Trainings- und Forschungsstation?';
      $scope.Penalty = 'Strafpunkte';
      $scope.Penaltya = 'Wie viele Strafpunkte befinden sich im weißen Dreieck in der Ecke des Spielfelds? Hinweis: Jeden nicht gegebenen Strafpunkt legt der Schiedsrichter nach Matchende in die Trainings- und Forschungsstation.';

    });

} else if (language == 'pt-br') {
    menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Sim';
      $scope.No = 'Não';
      $scope.Title = 'Pontuador do Animal Allies (v2.0)';
      $scope.Timers = 'Cronômetros';
      $scope.Saves = 'Salvos';
      $scope.Points = 'Pontos';

      $scope.M01 = 'TRANSPORTE DE TUBARÃO';
      $scope.M01a = 'O Tanque e Tubarão estão completamente no Alvo 1 (retângulo à esquerda?)';
      $scope.M01b = 'O Tanque e Tubarão estão completamente no Alvo 2 (retângulo à direita?)';
      $scope.M01c = 'O Tubarão está tocando apenas o fundo do tanque e nenhuma parede?';

      $scope.M02 = 'AÇÃO DO CÃO-GUIA';
      $scope.M02a = 'A Cerca de Proteção está abaixada e o robô cruzou-a completamente do Oeste?';

      $scope.M03 = 'CONSERVAÇÃO DOS ANIMAIS';
      $scope.M03a = 'Quantos animais idênticos estão completamente no mesmo lado da mesa?';
      $scope.M04 = 'ALIMENTAÇÃO';
      $scope.M04a = 'Quantas peças de Comida combinadas estão completamente na área alvo?';
      $scope.M05 = 'BIOMIMÉTICA';
      $scope.M05a = 'A Parede de Biomimética suporta todo o peso do Lagarto Branco?';
      $scope.M05b = 'A Parede de Biomimética suporta todo o peso do robô?';
      $scope.M06 = 'AUTOMAÇÃO DE ORDENHA';
      $scope.M06a = 'O Leite e Estrume rolaram todos para fora?';
      $scope.M06b = 'Todo Leite rolou para fora, mas nenhum Estrume?';
      $scope.M07 = 'LIBERTAÇÃO DO PANDA';
      $scope.M07a = 'A alavanca está completamente aberta no sentido horário?';
      $scope.M08 = 'RECUPERAÇÃO DA CÂMERA';
      $scope.M08a = 'A Câmera está completamente na Base?';
      $scope.M09 = 'TREINAMENTO E PESQUISA';
      $scope.M09a = 'O Cão e o Treinador estão completamente na Área de Treinamento e Pesquisa?';
      $scope.M09b = 'O Zoólogo está completamente na Área de Treinamento e Pesquisa?';
      $scope.M09c = 'Quantas Amostras de Estrume estão completamente na Área de Treinamento e Pesquisa?';
      $scope.M10 = 'APICULTURA';
      $scope.M10a = 'A Abelha está na Colmeia e não há Mel na mesma?';
      $scope.M10b = 'A Abelha está na Colmeia e o Mel está completamente na Base?';
      $scope.M11 = 'PRÓTESE';
      $scope.M11a = 'A Prótese está ajustada no Animal de Estimação E não está segurada pelo Juiz?';
      $scope.M11b = 'A Prótese está ajustada no Animal de Estimação E o mesmo está completamente na sua Fazenda?';
      $scope.M12 = 'FOCA NA BASE';
      $scope.M12a = 'A Foca está completamente na Base e não está quebrada?';
      $scope.M13 = 'LEITE NA BASE';
      $scope.M13a = 'Todos os três Leites estão completamente na Base?';
      $scope.M14 = 'LEITE NA RAMPA';
      $scope.M14a = 'Todos os três Leites estão completamente apoiados pela Rampa?';
      $scope.M14b = 'Todos os três Leites estão completamente apoiados pela Rampa E são as únicas coisas apoiadas pela Rampa?';
      $scope.M14c = 'Todos os três Leites estão completamente apoiados pela Rampa E são as únicas coisas apoiadas pela Rampa E estão todos de pé?';
      $scope.M15 = 'TODAS AS AMOSTRAS';
      $scope.M15a = 'Todas as sete Amostras de Estrume estão completamente na Área de Treinamento e Pesquisa?';
      $scope.Penalty = 'PENALIDADES';
      $scope.Penaltya = 'Quantas Amostras de Estrume estão no triângulo branco?';
    });

  } else if (language == "nl") {
         menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Ja';
      $scope.No = 'Nee';
      $scope.Title = 'Animal Allies Puntenteller (v2.0)';
      $scope.Timers = 'Timers';
      $scope.Saves = 'Saves';
      $scope.Points = 'Punten';

      $scope.M01 = 'HAAIENVERVOER';
      $scope.M01a = 'Zijn de tank en de haai compleet in gebied 1 (linker box?';
      $scope.M01b = 'Zijn de tank en de haai complete in gebied 2 (rechter box?)';
      $scope.M01c = 'Raakt de haai alleen de de bodem van de tank aan?';
      $scope.M01d = 'Opmerking: Na de start is het niet toegestaan date er iets ander dan de haai de tank raakt';
      $scope.M02 = 'HULPHOND IN ACTIE';
      $scope.M02a = 'Is het waarschuwinshek omlaag?';
      $scope.M02b = 'Opmerking: Waarschuwingshek moet omlaag zijn, omdat de robot dit volledig doorkruist van het westen, nadat hij tussen de slagbomen heeft gereden';
      $scope.M03 = 'DIERENBESCHERMING';
      $scope.M03a = 'Hoeveel identieke paren van dieren zijn op beide tafels?';
      $scope.M03b = 'Opmerking: Elk paar moet worden gecreëerd door de rotatie van de Animal Conservation Mission Model.';
      $scope.M04 = 'VOEREN';
      $scope.M04a = 'Hoeveel stukken voedsel zijn volledig in een dierengebied?';
      $scope.M04b = 'Opmerking: Als er meerdere stukken voedsel zijn in een gebied, moeten ze allemaal met elkaar overeenkomen.';
      $scope.M05 = 'Biomimicry';
      $scope.M05a = 'Draagt de Biomimicry Muur al het gewicht van de Witte Gecko?';
      $scope.M05b = 'Draagt de Biomimicry Muur al het gewicht van de robot?';
      $scope.M05c = 'Opmerking: Niets van een scoring object mag in contact zijn met iets anders dan de Biomimicry muur en / of groene Gecko, De twee scorende voorwerpen mogen wel met elkaar in contact komen.';
      $scope.M06 = 'MELKMACHINE';
      $scope.M06a = 'Melk en mest zijn uitgerold?';
      $scope.M06b = 'Alle Melk is uitgerold, maar de mest niet';
      $scope.M06c = 'Opmerking: De enige beweging die de robot maakt om de melk en / of mest te bewegen komt door het verplaatsen van de rode hendel';
      $scope.M07 = 'PANDA VRIJLATING';
      $scope.M07a = 'Is de hendel volledige open, met de klok mee?';
      $scope.M08 = 'CAMERA TERUGHALEN';
      $scope.M08a = 'Is de camera volledig in de basis?';
      $scope.M09 = 'TRAINING EN ONDERZOEK';
      $scope.M09a = 'Zijn de Hond en Trainer volledig in het trainings-  en onderzoekgebied?';
      $scope.M09b = 'Is de dierdeskundige volledig in het trainings- en onderzoekgebied?';
      $scope.M09c = 'Hoeveel mest Monsters zijn volledig in het trainings- en onderzoekgebied?';
      $scope.M09d = 'Opmerking: Er mag slechts één mest monster per keer worden vervoerd';
      $scope.M10 = 'BIJEN HOUDEN';
      $scope.M10a = 'Is de bij op de bijenkorf en er is geen honing in de bijenkorf?';
      $scope.M10b = 'Is de bij op de bijenkorf en is er honing in de basis?';
      $scope.M11 = 'PROTHESE';
      $scope.M11a = 'Is de protese bevestigd aan het huisdier dus niet in bezit van de scheidsrechter?';
      $scope.M11b = 'Is de protese bevestigd aan het huisdier en is het huisdier volledig in het boerderijgebied?';
      $scope.M12 = 'ZEEHOND';
      $scope.M12a = 'Is de zeehond volledig in de basis en niet beschadigd?';
      $scope.M13 = 'MELK IN BASIS';
      $scope.M13a = 'Zijn  alle 3 de melk volledig in de basis?';
      $scope.M14 = 'MELK OP DE OPRIT';
      $scope.M14a = 'Zijn alle drie de melk volledig ondersteund door de Ramp?';
      $scope.M14b = 'Zijn alle drie de melk ondersteund door de Ramp en ze zijn de enige dingen die de ramp aanraken?';
      $scope.M14c = 'Zijn alle drie de melk volledig ondersteund door de Ramp en ze zijn de enige dingen die de ramp aanraken en staan ze allemaal rechtop?';
      $scope.M15 = 'ALLE MONSTERS';
      $scope.M15a = 'Zijn alle zeven mest monsters volledig in het trainings- en onderzoeksgebied?';
      $scope.Penalty = 'STRAFPUNTEN';
      $scope.Penaltya = 'Hoeveel mest monsters zijn er in het witte driehoek gebied?';

    });

  } else {

    menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Yes';
      $scope.No = 'No';
      $scope.Title = 'Animal Allies Scorer (v2.0)';
      $scope.Timers = 'Timers';
      $scope.Saves = 'Saves';
      $scope.Points = 'Points';

      $scope.M01 = 'Shark Shipment';
      $scope.M01a = 'Is the Tank and the Shark completely in Target 1 (Left Box?)';
      $scope.M01b = 'Is the Tank and the Shark completely in Target 2 (Right Box?)';
      $scope.M01c = 'Is the Shark only touching the tank floor?';
      $scope.M01d = 'Note: After Launch, nothing is allowed to touch the Shark except the Tank.';
      $scope.M02 = 'Service Dog Action';
      $scope.M02a = 'Is the Warning Fence down?';
      $scope.M02b = 'Note: Fence must be down because the Robot completely crossed it from the west, after traveling between the Barriers.';
      $scope.M03 = 'Animal Conservation';
      $scope.M03a = 'How many identical pairs of Animals are on both tables?';
      $scope.M03b = 'Note: Each pair must be created through rotation of the Animal Conservation Mission Model.';
      $scope.M04 = 'Feeding';
      $scope.M04a = 'How many pieces of Food are completely in the target areas?';
      $scope.M04b = 'Note: If multiple pieces of Food are in one area, all must match each other.';
      $scope.M05 = 'Biomimicry';
      $scope.M05a = 'Does the Biomimicry Wall support all the weight of the White Gecko?';
      $scope.M05b = 'Does the Biomimicry Wall support all the weight of the robot?';
      $scope.M05c = 'Note: No part of a scoring object may be in contact with anything but the Biomimicry Wall and/or Green Gecko, except two scoring objects may be in contact with each other.';
      $scope.M06 = 'Milking Automation';
      $scope.M06a = 'Has Milk and Manure rolled out?';
      $scope.M06b = 'Has all the Milk rolled out but not the Manure?';
      $scope.M06c = 'Note: The Robot’s only movement of the Milk and/or Manure came by moving the red lever';
      $scope.M07 = 'Panda Release';
      $scope.M07a = 'Is the slider fully open clockwise?';
      $scope.M08 = 'Camera Recovery';
      $scope.M08a = 'Is the Camera completely in Base?';
      $scope.M09 = 'Training and Research';
      $scope.M09a = 'Are the Dog and Trainer completely in the Training and Research Area?';
      $scope.M09b = 'Is the Zoologist completely in the Training and Research Area?';
      $scope.M09c = 'How many Manure Samples are completely in the Training and Research Area?';
      $scope.M09d = 'Note: Only one Manure Sample may be Transported at a time';
      $scope.M10 = 'Beekeeping';
      $scope.M10a = 'Is the Bee on the Beehive and there is no Honey in the Beehive?';
      $scope.M10b = 'Is the Bee on the Beehive and Honey is in base?';
      $scope.M11 = 'Prosthesis';
      $scope.M11a = 'Is the Prosthesis fitted to the Pet AND not held by the Referee?';
      $scope.M11b = 'Is the Prosthesis fitted to the Pet AND the Pet is completely in its Farm Target?';
      $scope.M12 = 'Seal in Base';
      $scope.M12a = 'Is the Seal completely in Base and not broken?';
      $scope.M13 = 'Milk in Base';
      $scope.M13a = 'Are three Milk completely in Base?';
      $scope.M14 = 'Milk on Ramp';
      $scope.M14a = 'Are all three Milk completely supported by the Ramp?';
      $scope.M14b = 'Are all three Milk completely supported by the Ramp AND they are the only things touching the Ramp?';
      $scope.M14c = 'Are all three Milk completely supported by the Ramp AND they are the only things touching the Ramp AND they are all standing?';
      $scope.M15 = 'All Samples';
      $scope.M15a = 'Are all seven Manure Samples completely in the Training and Research Area?';
      $scope.Penalty = 'Penalty';
      $scope.Penaltya = 'How many Manure Samples are in the white triangle area?';

    });
  }


  

