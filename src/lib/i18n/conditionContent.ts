// Traducción al español del contenido profundo de cada condición
// (conditionsData.ts es la fuente en inglés). Si un slug no está aquí,
// ConditionDetailContent simplemente usa el contenido en inglés como respaldo.

export interface ConditionContentEs {
  heroSubtitle: string;
  overview: string[];
  commonCauses: string[];
  symptoms: string[];
  ifTreatedEarly: string;
  ifLeftUntreated: string;
  howWeTreatIt: string[];
  faqs: { question: string; answer: string }[];
}

export const CONDITION_CONTENT_ES: Record<string, ConditionContentEs> = {
  "back-pain": {
    heroSubtitle:
      "Desde un dolor sordo hasta un dolor agudo y limitante, nuestro equipo te ayuda a encontrar y tratar la causa real del dolor de espalda.",
    overview: [
      "El dolor de espalda es una de las razones más comunes por las que las personas posponen sus actividades diarias, el trabajo y el ejercicio. Puede aparecer repentinamente después de un accidente o desarrollarse lentamente a lo largo de meses de mala postura y tensión repetitiva.",
      "En Corona Hands-On Therapy, no solo tratamos el área que duele — vemos cómo trabajan juntos tu columna, caderas y core, ya que los problemas en un área a menudo se manifiestan como dolor en otra.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones por impacto repentino",
      "Lesiones laborales por levantar peso, agacharse o tensión repetitiva",
      "Discos herniados o abultados",
      "Distensión muscular o esguince de ligamentos",
      "Mala postura por largas horas sentado o de pie",
      "Cambios degenerativos como la osteoartritis",
      "Músculos del core débiles que dejan la columna sin soporte",
      "Caídas o accidentes en el hogar",
    ],
    symptoms: [
      "Dolor sordo en la parte baja o alta de la espalda",
      "Dolor agudo que limita agacharse o girar",
      "Rigidez, especialmente a primera hora de la mañana",
      "Dolor que se irradia hacia las caderas o piernas",
      "Espasmos musculares a lo largo de la columna",
      "Rango de movimiento reducido",
    ],
    ifTreatedEarly:
      "La mayoría de los dolores de espalda responden bien a un tratamiento temprano y específico. Los pacientes que comienzan terapia física y atención quiropráctica poco después de que empiezan los síntomas generalmente recuperan la movilidad completa más rápido, evitan compensar con otras partes del cuerpo, y reducen su riesgo de que el dolor se vuelva crónico.",
    ifLeftUntreated:
      "El dolor de espalda ignorado tiende a cambiar la forma en que te mueves sin que te des cuenta — comienzas a evitar ciertas posiciones, lo que pone tensión adicional en las caderas, rodillas y cuello. Con el tiempo, el dolor de espalda no tratado puede volverse crónico, más difícil de tratar, y puede limitar actividades diarias básicas como sentarse, manejar o dormir cómodamente.",
    howWeTreatIt: [
      "Una evaluación completa para identificar si el dolor proviene de irritación muscular, articular, discal o nerviosa",
      "Un plan de terapia física personalizado enfocado en la estabilidad del core, flexibilidad y patrones de movimiento seguros",
      "Ajustes quiroprácticos para restaurar la alineación adecuada y reducir la irritación nerviosa",
      "Acupuntura como opción complementaria y libre de medicamentos para el manejo del dolor",
      "Educación sobre postura, técnica de levantamiento y hábitos diarios que protegen tu espalda a futuro",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo toma que mejore el dolor de espalda con terapia?",
        answer:
          "Depende de la causa y de cuánto tiempo has tenido el dolor, pero muchos pacientes notan una mejora significativa dentro de unas pocas semanas de tratamiento constante.",
      },
      {
        question: "¿Puedo seguir trabajando mientras trato mi dolor de espalda?",
        answer:
          "En la mayoría de los casos, sí. Construimos planes de tratamiento en torno a tus responsabilidades diarias y los ajustamos a medida que mejora tu dolor.",
      },
      {
        question: "¿Necesito imágenes antes de comenzar el tratamiento?",
        answer:
          "No siempre. Nuestra evaluación a menudo identifica la causa probable sin necesidad de imágenes, aunque te referiremos para estudios de imagen si algo sugiere que se necesitan.",
      },
    ],
  },

  "neck-pain": {
    heroSubtitle:
      "Latigazo cervical, cuello de tecnología, o una lesión antigua — te ayudamos a identificar qué está causando realmente tu dolor de cuello y a tratarlo en su origen.",
    overview: [
      "El dolor de cuello es extremadamente común, pero eso no significa que tengas que vivir con él. Ya sea que haya comenzado después de un accidente automovilístico, una lesión laboral, o gradualmente por mirar hacia abajo a un teléfono o pantalla todo el día, el dolor de cuello casi siempre tiene una causa subyacente tratable.",
      "Nuestros proveedores trabajan juntos — terapia física, atención quiropráctica y acupuntura — para aliviar el dolor y abordar el problema de movimiento o alineación de fondo detrás de él.",
    ],
    commonCauses: [
      "Latigazo cervical por accidentes automovilísticos",
      "Lesiones laborales y tensión repetitiva",
      "Mala postura por uso de teléfono o computadora",
      "Dormir en una posición incómoda",
      "Discos herniados o degenerados en la columna cervical",
      "Tensión muscular por estrés",
      "Caídas o lesiones deportivas",
      "Artritis en la columna cervical",
    ],
    symptoms: [
      "Rigidez o rango de movimiento reducido al girar la cabeza",
      "Dolor agudo o sordo en el cuello y hombros",
      "Dolores de cabeza que comienzan en la base del cráneo",
      "Entumecimiento u hormigueo que se irradia hacia los brazos",
      "Espasmos musculares en el cuello y la parte alta de la espalda",
      "Dolor que empeora al estar sentado por mucho tiempo",
    ],
    ifTreatedEarly:
      "El dolor de cuello que se aborda temprano generalmente responde rápido a una combinación de terapia manual, ejercicio específico y corrección de postura. El tratamiento temprano también reduce la posibilidad de que se desarrolle dolor compensatorio en los hombros o la parte alta de la espalda.",
    ifLeftUntreated:
      "Sin tratamiento, el dolor de cuello puede llevar a dolores de cabeza tensionales crónicos, un rango de movimiento reducido que se vuelve permanente, e irritación nerviosa que causa entumecimiento o debilidad en el brazo. Debido a que el cuello soporta y protege la médula espinal, la tensión continua sin tratar también puede afectar la postura y movilidad de todo el cuerpo superior.",
    howWeTreatIt: [
      "Una evaluación práctica para identificar si el dolor es muscular, articular o nervioso",
      "Ejercicios de terapia física para restaurar fuerza y rango de movimiento",
      "Ajustes quiroprácticos para aliviar la restricción articular y mejorar la alineación",
      "Acupuntura para alivio del dolor y la tensión sin medicamentos",
      "Guía ergonómica y de postura para el trabajo y la vida diaria",
    ],
    faqs: [
      {
        question: "¿Es seguro recibir atención quiropráctica para el dolor de cuello después de un accidente?",
        answer:
          "Sí — después de una evaluación inicial para descartar algo que requiera atención médica urgente, la atención quiropráctica es una parte común y efectiva de la recuperación de latigazo cervical y lesiones de cuello.",
      },
      {
        question: "¿Por qué me dan dolores de cabeza junto con mi dolor de cuello?",
        answer:
          "Los músculos tensos en la base del cráneo y las articulaciones restringidas en la parte alta del cuello son una fuente muy común de dolores de cabeza tensionales.",
      },
      {
        question: "¿Puede el dolor de cuello causar entumecimiento en el brazo?",
        answer:
          "Sí, si un nervio en el cuello está irritado o comprimido, puede causar entumecimiento, hormigueo o debilidad que viaja por el brazo.",
      },
    ],
  },

  "shoulder-pain": {
    heroSubtitle:
      "Desde distensión del manguito rotador hasta lesiones post-accidente, te ayudamos a restaurar la fuerza y el movimiento del hombro sin cirugía.",
    overview: [
      "El hombro es una de las articulaciones más móviles del cuerpo, lo que también lo hace una de las más fáciles de lesionar. El dolor de hombro puede provenir de un solo evento traumático, como un accidente, o desarrollarse gradualmente por movimiento repetitivo por encima de la cabeza en el trabajo.",
      "Nuestro enfoque combina terapia física y atención quiropráctica para restaurar fuerza, estabilidad y un rango de movimiento libre de dolor.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones por impacto",
      "Distensión o desgarros del manguito rotador",
      "Lesiones laborales por levantamiento repetitivo o alcance por encima de la cabeza",
      "Hombro congelado (capsulitis adhesiva)",
      "Pinzamiento del hombro",
      "Caídas sobre un brazo extendido",
      "Mala postura que afecta la mecánica del hombro",
      "Lesiones deportivas",
    ],
    symptoms: [
      "Dolor al levantar el brazo por encima de la cabeza",
      "Debilidad al alcanzar o cargar objetos",
      "Sensaciones de chasquido o enganche en la articulación",
      "Dolor que interrumpe el sueño, especialmente al acostarse de ese lado",
      "Rigidez que limita alcanzar detrás de la espalda",
      "Hinchazón alrededor de la articulación del hombro",
    ],
    ifTreatedEarly:
      "Las lesiones de hombro tratadas temprano con terapia física específica a menudo evitan la necesidad de una intervención más invasiva. Restaurar rápidamente los patrones de movimiento adecuados también ayuda a prevenir que los músculos circundantes del cuello y parte alta de la espalda compensen y desarrollen dolor secundario.",
    ifLeftUntreated:
      "Una lesión de hombro no tratada tiende a ponerse más rígida con el tiempo a medida que el cuerpo protege el área limitando el movimiento — esto puede progresar a un hombro congelado que es mucho más difícil de tratar. Continuar usando un hombro lesionado sin la rehabilitación adecuada también aumenta el riesgo de que una pequeña distensión se convierta en un desgarro completo.",
    howWeTreatIt: [
      "Evaluación de la fuerza, estabilidad y rango de movimiento del hombro",
      "Terapia física enfocada en fortalecer el manguito rotador y el control escapular",
      "Atención quiropráctica para abordar restricciones relacionadas en el cuello y parte alta de la espalda",
      "Acupuntura para alivio del dolor durante el proceso de rehabilitación",
      "Un plan gradual de retorno a la actividad para que no vuelvas a lesionar la articulación",
    ],
    faqs: [
      {
        question: "¿Necesito cirugía para una lesión del manguito rotador?",
        answer:
          "Muchas distensiones y desgarros parciales del manguito rotador mejoran significativamente solo con terapia física. La cirugía generalmente se reserva para desgarros más severos o casos que no responden al cuidado conservador.",
      },
      {
        question: "¿Por qué me duele más el hombro por la noche?",
        answer:
          "Acostarse sobre el hombro afectado aumenta la presión sobre el tejido inflamado, y el movimiento reducido durante el sueño también puede permitir que se asiente la rigidez.",
      },
      {
        question: "¿Cuánto tiempo toma resolverse un hombro congelado?",
        answer:
          "Varía ampliamente, pero la terapia física constante puede acelerar significativamente la recuperación y reducir cuánto dura la fase rígida.",
      },
    ],
  },

  "hip-pain": {
    heroSubtitle:
      "El dolor de cadera afecta cómo caminas, te sientas y duermes — te ayudamos a identificar la causa y a moverte cómodamente de nuevo.",
    overview: [
      "El dolor de cadera puede provenir de la articulación misma, los músculos circundantes, o incluso ser referido desde la parte baja de la espalda. Debido a que la cadera es central en casi todo movimiento — caminar, sentarse, pararse, subir escaleras — el dolor aquí afecta rápidamente la vida diaria.",
      "Evaluamos la cadera en el contexto de todo el cuerpo inferior, ya que el dolor de cadera a menudo está conectado a cómo trabajan juntos la parte baja de la espalda, rodillas y pies.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones por impacto",
      "Lesiones laborales por levantamiento o tensión repetitiva",
      "Bursitis de cadera",
      "Distensión muscular en los flexores de cadera o glúteos",
      "Artritis en la articulación de la cadera",
      "Ciática que refiere dolor desde la parte baja de la espalda",
      "Caídas o accidentes en el hogar",
      "Mala mecánica de movimiento durante ejercicio o deportes",
    ],
    symptoms: [
      "Dolor en la ingle, cadera externa o glúteo",
      "Rigidez al levantarse de estar sentado",
      "Cojera o patrón de caminar alterado",
      "Dolor que empeora con escaleras o pendientes",
      "Rango de movimiento reducido al rotar la cadera",
      "Dolor que se irradia hacia el muslo",
    ],
    ifTreatedEarly:
      "El dolor de cadera abordado temprano a menudo se resuelve con fortalecimiento específico y trabajo de movilidad antes de que cambie la forma en que caminas. El tratamiento temprano ayuda a evitar que la rodilla y la parte baja de la espalda compensen por una cadera que no se mueve correctamente.",
    ifLeftUntreated:
      "Un problema de cadera no tratado comúnmente lleva a un cambio en la marcha, lo que pone tensión adicional en las rodillas y la parte baja de la espalda. Con el tiempo esto puede crear un ciclo de dolor en múltiples articulaciones, y los músculos rígidos de la cadera pueden volverse significativamente más difíciles de alargar y fortalecer cuanto más tiempo se dejen sin tratar.",
    howWeTreatIt: [
      "Una evaluación basada en el movimiento de la cadera, parte baja de la espalda y músculos circundantes",
      "Terapia física para restaurar fuerza, flexibilidad y estabilidad de la cadera",
      "Atención quiropráctica para abordar problemas relacionados de alineación pélvica o de la parte baja de la espalda",
      "Acupuntura para el manejo del dolor junto con la rehabilitación",
      "Reentrenamiento de marcha y movimiento para corregir compensaciones",
    ],
    faqs: [
      {
        question: "¿Por qué empeora mi dolor de cadera al subir escaleras?",
        answer:
          "Las escaleras exigen más fuerza y estabilidad de los músculos de la cadera que caminar en plano, así que la debilidad o irritación ahí tiende a manifestarse más en pendientes y escaleras.",
      },
      {
        question: "¿Pueden los problemas de la parte baja de la espalda causar dolor de cadera?",
        answer:
          "Sí — la irritación nerviosa en la parte baja de la espalda puede referir dolor hacia la cadera y el muslo, por lo que evaluamos la parte baja de la espalda como parte de cualquier evaluación de dolor de cadera.",
      },
      {
        question: "¿Está bien caminar mientras sana mi cadera?",
        answer:
          "Generalmente sí, con moderación — te guiaremos sobre cuánta actividad es apropiada a medida que avanza tu plan de tratamiento.",
      },
    ],
  },

  "knee-pain": {
    heroSubtitle:
      "Ya sea una lesión antigua o una nueva, te ayudamos a reconstruir la fuerza y estabilidad de la rodilla sin cirugía innecesaria.",
    overview: [
      "La rodilla absorbe una fuerza enorme con cada paso, por lo que es especialmente vulnerable tanto a lesiones repentinas como al desgaste gradual. El dolor de rodilla puede provenir de la articulación misma, los ligamentos circundantes, o de problemas mecánicos más arriba en la cadera o más abajo en el pie.",
      "Nuestro enfoque de terapia física se centra en restaurar la fuerza y la mecánica de movimiento adecuada para que la rodilla esté bien soportada en adelante.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones de impacto directo",
      "Lesiones laborales por arrodillarse, levantar peso o tensión repetitiva",
      "Esguinces de ligamentos, incluyendo lesiones de LCA y LCM",
      "Desgarros de menisco",
      "Problemas de rastreo patelar",
      "Osteoartritis de la rodilla",
      "Caídas o accidentes en el hogar",
      "Sobreuso por deportes o actividad repetitiva",
    ],
    symptoms: [
      "Hinchazón alrededor de la articulación de la rodilla",
      "Inestabilidad o sensación de que la rodilla pueda ceder",
      "Dolor al subir o bajar escaleras",
      "Sensaciones de chasquido, estallido o enganche",
      "Rigidez después de estar sentado por mucho tiempo",
      "Dolor al agacharse o arrodillarse",
    ],
    ifTreatedEarly:
      "Las lesiones de rodilla tratadas temprano con la rehabilitación adecuada a menudo sanan bien y recuperan función completa, especialmente cuando el fortalecimiento comienza antes de que los músculos circundantes tengan la oportunidad de debilitarse más por el desuso.",
    ifLeftUntreated:
      "Una lesión de rodilla no tratada puede llevar a inestabilidad continua, lo que aumenta el riesgo de volver a lesionarse con el movimiento cotidiano. La debilidad muscular alrededor de una rodilla no rehabilitada tiende a empeorar con el tiempo, y los patrones de caminar alterados eventualmente pueden crear dolor también en la cadera o la parte baja de la espalda.",
    howWeTreatIt: [
      "Una evaluación exhaustiva de la estabilidad, alineación y fuerza de la rodilla",
      "Terapia física enfocada en fortalecer cuádriceps, isquiotibiales y cadera",
      "Atención quiropráctica para abordar problemas de alineación que afectan la rodilla desde arriba",
      "Acupuntura para ayudar a manejar el dolor durante la rehabilitación activa",
      "Un plan estructurado de retorno a la actividad para recuperar función completa de forma segura",
    ],
    faqs: [
      {
        question: "¿Necesito una resonancia magnética antes de empezar terapia física para el dolor de rodilla?",
        answer:
          "No siempre — muchas condiciones de rodilla pueden evaluarse clínicamente, aunque recomendaremos estudios de imagen si tus síntomas sugieren un problema estructural más significativo.",
      },
      {
        question: "¿Puede la terapia física ayudar después de un desgarro de menisco?",
        answer:
          "Sí, la terapia física es una parte fundamental de la recuperación tanto antes como después de cualquier tratamiento quirúrgico, y muchos desgarros menores mejoran solo con terapia.",
      },
      {
        question: "¿Por qué me duele más la rodilla al bajar escaleras que al subir?",
        answer:
          "Bajar escaleras pone más carga en la parte frontal de la rodilla y en los músculos que controlan la desaceleración, lo cual es un área de debilidad muy común.",
      },
    ],
  },

  "elbow-pain": {
    heroSubtitle:
      "Desde el codo de tenista hasta tensión relacionada con el trabajo, te ayudamos a resolver el dolor de codo para que puedas agarrar, levantar y trabajar sin molestias.",
    overview: [
      "El dolor de codo a menudo se desarrolla por movimientos repetitivos de agarre, levantamiento o torsión — comunes tanto en trabajos manuales como en tareas cotidianas. También puede resultar de una lesión directa, como una caída o impacto durante un accidente.",
      "Tratamos el dolor de codo abordando tanto la irritación local del tejido como la mecánica del antebrazo y el hombro que a menudo contribuyen a él.",
    ],
    commonCauses: [
      "Lesiones laborales por levantamiento o agarre repetitivo",
      "Accidentes automovilísticos y lesiones por impacto",
      "Codo de tenista (epicondilitis lateral)",
      "Codo de golfista (epicondilitis medial)",
      "Irritación nerviosa en el codo",
      "Caídas sobre un brazo extendido",
      "Sobreuso por deportes o trabajo manual",
      "Mala ergonomía en un escritorio o estación de trabajo",
    ],
    symptoms: [
      "Dolor en la parte externa o interna del codo",
      "Fuerza de agarre débil",
      "Dolor que empeora al agarrar o levantar",
      "Sensibilidad al tacto cerca de la articulación del codo",
      "Rigidez al extender completamente el brazo",
      "Entumecimiento u hormigueo en el antebrazo o mano",
    ],
    ifTreatedEarly:
      "El dolor de codo tratado temprano con modificación de actividad y terapia específica generalmente se resuelve bien, ya que gran parte proviene de tendones sobrecargados que responden a un ciclo estructurado de fortalecimiento y descanso.",
    ifLeftUntreated:
      "Continuar usando un codo lesionado sin tratamiento puede convertir una distensión leve en un problema tendinoso crónico que sana mucho más lento. La debilidad de agarre no atendida también puede afectar la muñeca y la mano con el tiempo.",
    howWeTreatIt: [
      "Evaluación de la fuerza de agarre, flexibilidad del antebrazo y mecánica del codo",
      "Terapia física incluyendo ejercicios de fortalecimiento excéntrico para los tendones del antebrazo",
      "Técnicas quiroprácticas y de tejido blando para aliviar la tensión en el antebrazo y brazo superior",
      "Acupuntura para alivio del dolor durante el proceso de sanación",
      "Guía ergonómica para tareas laborales que involucran agarre o levantamiento repetitivo",
    ],
    faqs: [
      {
        question: "¿Tengo que dejar de trabajar con el codo de tenista?",
        answer:
          "Generalmente no del todo — típicamente modificamos tareas específicas que agravan el tendón mientras te mantenemos lo más activo posible en lo demás.",
      },
      {
        question: "¿Cuánto tiempo toma sanar el codo de tenista?",
        answer:
          "Varía, pero el tratamiento constante y la modificación de actividad a menudo muestran mejora dentro de varias semanas.",
      },
      {
        question: "¿Es útil una férula para el dolor de codo?",
        answer:
          "Una férula de contrafuerza puede ayudar a algunos pacientes a reducir la tensión en el tendón durante la actividad, y podemos asesorarte sobre si es adecuada para tu caso.",
      },
    ],
  },

  "wrist-pain": {
    heroSubtitle:
      "Ya sea por una caída, tensión repetitiva o una lesión antigua, te ayudamos a restaurar la fuerza y el movimiento libre de dolor en la muñeca.",
    overview: [
      "El dolor de muñeca es común después de una caída sobre una mano extendida, una lesión laboral, o por movimiento repetitivo como escribir o tareas manuales. Debido a que la muñeca es una articulación compleja con muchos huesos y ligamentos pequeños, identificar la causa exacta es importante para un tratamiento efectivo.",
      "Nuestro equipo evalúa la fuerza de agarre, el rango de movimiento y cualquier afectación nerviosa para construir un plan que se dirija a la fuente real de tu dolor.",
    ],
    commonCauses: [
      "Caídas sobre una mano extendida",
      "Accidentes automovilísticos y lesiones por impacto",
      "Lesiones laborales por movimiento repetitivo",
      "Síndrome del túnel carpiano",
      "Esguinces de muñeca y distensión de ligamentos",
      "Tendinitis por agarre o escritura repetitiva",
      "Artritis en la articulación de la muñeca",
      "Mala ergonomía en un escritorio o estación de trabajo",
    ],
    symptoms: [
      "Dolor al doblar o extender la muñeca",
      "Hinchazón alrededor de la articulación de la muñeca",
      "Entumecimiento u hormigueo en los dedos",
      "Fuerza de agarre débil",
      "Sensaciones de chasquido o enganche",
      "Dolor que empeora al escribir o con movimiento repetitivo",
    ],
    ifTreatedEarly:
      "Las lesiones de muñeca tratadas temprano con soporte adecuado y terapia específica generalmente sanan bien y evitan rigidez a largo plazo. Abordar temprano síntomas relacionados con nervios como el entumecimiento también ayuda a prevenir que se vuelvan más persistentes.",
    ifLeftUntreated:
      "Una lesión de muñeca no tratada puede llevar a debilidad y rigidez crónicas que hacen que tareas cotidianas como agarrar, escribir o levantar objetos sean cada vez más difíciles. La compresión nerviosa no atendida, como en el síndrome del túnel carpiano, también puede empeorar y volverse más difícil de revertir.",
    howWeTreatIt: [
      "Evaluación de la movilidad de la muñeca, fuerza de agarre y función nerviosa",
      "Terapia física para restaurar fuerza y flexibilidad",
      "Técnicas de terapia manual para abordar restricción articular y de tejido blando",
      "Acupuntura para alivio del dolor y síntomas relacionados con nervios",
      "Guía ergonómica para escritura, levantamiento y tareas laborales repetitivas",
    ],
    faqs: [
      {
        question: "¿Es tratable el síndrome del túnel carpiano sin cirugía?",
        answer:
          "Muchos casos mejoran significativamente con terapia física, modificación de actividad y férulas, especialmente cuando se abordan temprano.",
      },
      {
        question: "¿Cómo sé si mi dolor de muñeca es de un esguince o algo más serio?",
        answer:
          "Una evaluación adecuada generalmente puede distinguir entre un esguince de tejido blando y algo que pueda necesitar imágenes, como una posible fractura.",
      },
      {
        question: "¿Puede escribir todo el día causar dolor de muñeca?",
        answer:
          "Sí, escribir repetitivamente sin una posición adecuada de la muñeca y sin descansos es un contribuyente muy común al dolor de muñeca y antebrazo.",
      },
    ],
  },

  "hand-pain": {
    heroSubtitle:
      "El dolor de mano afecta todo, desde escribir hasta agarrar un volante — te ayudamos a recuperar la función completa y libre de dolor.",
    overview: [
      "El dolor de mano puede provenir de una lesión aguda, como una caída o un accidente, o desarrollarse gradualmente por tareas repetitivas de motricidad fina. Debido a que la mano es esencial para casi toda actividad diaria, incluso un dolor leve aquí puede tener un impacto desproporcionado en la vida diaria.",
      "Evaluamos la fuerza de agarre y pinza, la movilidad de los dedos y la función nerviosa para determinar el enfoque de tratamiento más efectivo.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones por impacto",
      "Lesiones laborales por agarre repetitivo o tareas de motricidad fina",
      "Dedo en gatillo",
      "Artritis en las articulaciones de la mano",
      "Síndrome del túnel carpiano que afecta la sensación de mano y dedos",
      "Caídas o accidentes en el hogar",
      "Tendinitis por uso repetitivo",
      "Lesiones deportivas de dedos o mano",
    ],
    symptoms: [
      "Dolor o rigidez en los dedos o la palma",
      "Hinchazón en la mano o dedos",
      "Entumecimiento u hormigueo en las yemas de los dedos",
      "Fuerza débil de agarre o pinza",
      "Un dedo que se engancha o traba al doblarse",
      "Dolor que empeora con tareas repetitivas",
    ],
    ifTreatedEarly:
      "Las condiciones de mano tratadas temprano con terapia específica y modificación de actividad generalmente responden bien, preservando la función de motricidad fina y la fuerza de agarre antes de que se desarrollen patrones compensatorios en la muñeca o el antebrazo.",
    ifLeftUntreated:
      "Sin tratamiento, el dolor de mano puede limitar progresivamente la fuerza de agarre y la coordinación de motricidad fina, haciendo que tareas cotidianas como escribir, cocinar o manejar sean más difíciles. Los síntomas de mano relacionados con nervios también pueden empeorar con el tiempo si no se aborda la compresión subyacente.",
    howWeTreatIt: [
      "Evaluación de la fuerza de agarre, movilidad de dedos y sensación nerviosa",
      "Ejercicios de terapia física y de mano para restaurar fuerza y destreza",
      "Terapia manual para abordar rigidez en las articulaciones y tejido blando",
      "Acupuntura para manejo del dolor y síntomas relacionados con nervios",
      "Guía sobre modificación de actividad para tareas repetitivas intensivas en la mano",
    ],
    faqs: [
      {
        question: "¿Qué es el dedo en gatillo y puede ayudar la terapia?",
        answer:
          "El dedo en gatillo ocurre cuando un tendón en el dedo se engancha al deslizarse por su vaina. La terapia, el uso de férulas y la modificación de actividad pueden ayudar en muchos casos leves a moderados.",
      },
      {
        question: "¿Por qué tengo los dedos entumecidos junto con el dolor de mano?",
        answer:
          "El entumecimiento a menudo es un signo de afectación nerviosa, lo cual evaluamos cuidadosamente ya que cambia el enfoque de tratamiento.",
      },
      {
        question: "¿Se puede manejar la artritis de mano sin medicamentos?",
        answer:
          "La terapia basada en movimiento, técnicas de protección articular, y enfoques complementarios como la acupuntura pueden reducir significativamente los síntomas de artritis junto con cualquier manejo médico.",
      },
    ],
  },

  "foot-pain": {
    heroSubtitle:
      "Desde la fascitis plantar hasta el dolor post-lesión, te ayudamos a volver a estar de pie cómodamente.",
    overview: [
      "El dolor de pie afecta cada paso que das, lo que lo convierte en uno de los tipos de dolor más disruptivos con los que vivir. Puede provenir de una lesión aguda, del calzado y la biomecánica, o de tensión repetitiva en el trabajo.",
      "Nuestra evaluación examina la estructura del pie, la marcha, y cómo se mueve todo el cuerpo inferior en conjunto, ya que el dolor de pie a menudo está conectado con el tobillo, la rodilla y la cadera por encima.",
    ],
    commonCauses: [
      "Accidentes automovilísticos y lesiones por impacto",
      "Lesiones laborales por estar de pie o caminar largos periodos",
      "Fascitis plantar",
      "Fracturas por estrés",
      "Mal calzado o mecánica del pie",
      "Irritación nerviosa, como el síndrome del túnel tarsiano",
      "Caídas o accidentes en el hogar",
      "Sobreuso por caminar, correr, u ocupaciones de estar de pie",
    ],
    symptoms: [
      "Dolor agudo en el talón, especialmente a primera hora de la mañana",
      "Hinchazón en la parte superior o inferior del pie",
      "Dolor que empeora al estar de pie o caminar por mucho tiempo",
      "Entumecimiento u hormigueo en los dedos del pie",
      "Sensibilidad a lo largo del arco",
      "Dolor que cambia tu patrón de caminar",
    ],
    ifTreatedEarly:
      "El dolor de pie abordado temprano con estiramiento adecuado, fortalecimiento y guía sobre calzado a menudo se resuelve bien antes de que cambie la forma en que caminas o te paras — lo cual es importante, ya que las compensaciones en otras partes de la pierna pueden crear problemas secundarios.",
    ifLeftUntreated:
      "Una condición de pie no tratada como la fascitis plantar puede volverse crónica y significativamente más difícil de resolver. Los patrones de caminar alterados por el dolor de pie continuo frecuentemente llevan a dolor secundario en las rodillas, caderas, o parte baja de la espalda con el tiempo.",
    howWeTreatIt: [
      "Una evaluación de la marcha y la estructura del pie",
      "Terapia física enfocada en estiramiento, fortalecimiento y movilidad del pie y tobillo",
      "Terapia manual para abordar la tensión de tejido que contribuye al dolor",
      "Acupuntura para alivio del dolor durante el proceso de rehabilitación",
      "Guía sobre calzado y actividad para prevenir la recurrencia",
    ],
    faqs: [
      {
        question: "¿Por qué me duele más el talón por la mañana?",
        answer:
          "El tejido de la fascia plantar se tensa durante la noche, así que los primeros pasos después de despertar a menudo lo estiran repentinamente, causando un dolor agudo que típicamente disminuye al moverte.",
      },
      {
        question: "¿Necesito ortesis personalizadas para el dolor de pie?",
        answer:
          "No siempre — muchos casos mejoran con estiramiento, fortalecimiento y calzado adecuado, aunque las ortesis pueden ayudar con problemas estructurales específicos cuando se necesitan.",
      },
      {
        question: "¿Puedo seguir haciendo ejercicio con fascitis plantar?",
        answer:
          "A menudo sí, con modificaciones — te ayudaremos a ajustar la actividad para que puedas mantenerte activo mientras sana el tejido.",
      },
    ],
  },

  "ankle-pain": {
    heroSubtitle:
      "Desde esguinces hasta inestabilidad post-accidente, te ayudamos a reconstruir la fuerza del tobillo para que puedas moverte con confianza de nuevo.",
    overview: [
      "El tobillo es una de las articulaciones que se lesiona con más frecuencia, ya sea por un giro repentino, una caída, o un accidente. Debido a que el tobillo soporta todo el peso de tu cuerpo con cada paso, incluso un esguince aparentemente menor merece una rehabilitación adecuada.",
      "Nos enfocamos en restaurar fuerza, equilibrio y estabilidad para que el tobillo no permanezca vulnerable a lesiones repetidas.",
    ],
    commonCauses: [
      "Esguinces de tobillo por girarlo o torcerlo",
      "Accidentes automovilísticos y lesiones por impacto",
      "Lesiones laborales por superficies irregulares o caídas",
      "Distensión del tendón de Aquiles",
      "Inestabilidad crónica del tobillo por un esguince previo mal tratado",
      "Fracturas por caídas o trauma directo",
      "Sobreuso por deportes u ocupaciones de estar de pie",
      "Mal calzado o superficies para caminar",
    ],
    symptoms: [
      "Hinchazón y moretones alrededor del tobillo",
      "Dolor al soportar peso",
      "Sensación de inestabilidad o de que el tobillo cede",
      "Rigidez después de periodos de descanso",
      "Dolor a lo largo del tendón de Aquiles",
      "Rango de movimiento reducido",
    ],
    ifTreatedEarly:
      "Los esguinces de tobillo tratados temprano con la rehabilitación adecuada sanan bien y recuperan fuerza y equilibrio completos, reduciendo significativamente el riesgo de volver a lesionarse o de inestabilidad a largo plazo.",
    ifLeftUntreated:
      "Los esguinces de tobillo que no se rehabilitan adecuadamente son una de las causas más comunes de inestabilidad crónica del tobillo — lo que significa que la articulación permanece propensa a girarse una y otra vez. Esta inestabilidad continua también puede afectar la rodilla y la cadera con el tiempo a medida que el cuerpo compensa.",
    howWeTreatIt: [
      "Evaluación de la estabilidad, fuerza y equilibrio del tobillo",
      "Terapia física incluyendo entrenamiento de equilibrio y propiocepción",
      "Terapia manual para restaurar la movilidad articular adecuada",
      "Acupuntura para alivio del dolor durante la recuperación",
      "Un plan estructurado de retorno a la actividad para prevenir esguinces repetidos",
    ],
    faqs: [
      {
        question: "¿Necesito evitar poner peso en un tobillo esguinzado?",
        answer:
          "Depende de la severidad — te guiaremos sobre el soporte de peso y movimiento seguro según tu lesión específica.",
      },
      {
        question: "¿Por qué mi tobillo se sigue girando incluso después de haber sanado?",
        answer:
          "Esto a menudo es un signo de rehabilitación incompleta del equilibrio y la fuerza después del esguince original, que es exactamente lo que un plan adecuado de terapia física aborda.",
      },
      {
        question: "¿Cuánto tiempo toma sanar un esguince de tobillo?",
        answer:
          "Los esguinces leves a menudo mejoran dentro de unas pocas semanas con el tratamiento adecuado, mientras que los esguinces más significativos pueden tomar más tiempo — la rehabilitación constante es el factor más importante para una recuperación completa.",
      },
    ],
  },

  sciatica: {
    heroSubtitle:
      "El dolor agudo y punzante que baja por la pierna no es algo para simplemente aguantar — tratamos la irritación nerviosa en su origen.",
    overview: [
      "La ciática es un dolor que viaja a lo largo del nervio ciático, generalmente comenzando en la parte baja de la espalda o el glúteo e irradiándose por una pierna. Es un síntoma de un problema subyacente — más a menudo un disco o músculo que presiona el nervio — en lugar de una condición en sí misma.",
      "Debido a que la ciática puede provenir de varias fuentes diferentes, una evaluación precisa es el primer paso. A partir de ahí, construimos un plan que alivia la presión sobre el nervio y restaura el movimiento normal en la parte baja de la espalda y las caderas.",
    ],
    commonCauses: [
      "Discos herniados o abultados en la columna lumbar",
      "Accidentes automovilísticos y lesiones por impacto repentino",
      "Síndrome piriforme (irritación muscular del nervio en el glúteo)",
      "Estenosis espinal que estrecha el espacio alrededor del nervio",
      "Lesiones laborales por levantamiento pesado o estar sentado por mucho tiempo",
      "Enfermedad degenerativa del disco",
      "Cambios pélvicos y de la parte baja de la espalda relacionados con el embarazo",
      "Estar sentado por mucho tiempo con mala postura",
    ],
    symptoms: [
      "Dolor agudo, punzante o ardiente desde la parte baja de la espalda hasta la pierna",
      "Entumecimiento u hormigueo en la pierna o el pie",
      "Dolor que empeora al sentarse o toser",
      "Debilidad en la pierna o el pie",
      "Un dolor sordo en el glúteo que se irradia hacia abajo",
      "Dolor que típicamente afecta solo un lado del cuerpo",
    ],
    ifTreatedEarly:
      "La ciática abordada temprano con la combinación correcta de terapia manual y ejercicio específico generalmente mejora significativamente en semanas, ya que reducir la presión sobre el nervio temprano previene que los síntomas se arraiguen más.",
    ifLeftUntreated:
      "La ciática no tratada puede llevar a un empeoramiento del entumecimiento y la debilidad en la pierna, y en casos más severos puede afectar el equilibrio y la capacidad de caminar normalmente. Cuanto más tiempo permanezca irritado un nervio, más tiempo puede tomar la recuperación completa una vez que comienza el tratamiento.",
    howWeTreatIt: [
      "Una evaluación exhaustiva para identificar exactamente dónde se está irritando el nervio",
      "Terapia física enfocada en aliviar la presión sobre el nervio y fortalecer el core",
      "Ajustes quiroprácticos para reducir la presión discal o articular sobre el nervio ciático",
      "Acupuntura para alivio del dolor relacionado con nervios",
      "Guía de movimiento y postura para prevenir que el dolor regrese",
    ],
    faqs: [
      {
        question: "¿Es la ciática lo mismo que un disco herniado?",
        answer:
          "No exactamente — un disco herniado es una causa común de la ciática, pero la ciática en sí se refiere al dolor nervioso, que también puede provenir de irritación muscular o estrechamiento espinal.",
      },
      {
        question: "¿Debo descansar completamente con ciática?",
        answer:
          "Generalmente no — el movimiento suave y guiado tiende a ayudar más que el descanso completo, el cual puede permitir que los músculos de soporte se debiliten más.",
      },
      {
        question: "¿Cuándo necesita la ciática imágenes o una referencia a un especialista?",
        answer:
          "Si hay debilidad significativa, pérdida de control de vejiga o intestino, o ninguna mejora con el cuidado conservador, te referiremos rápidamente para una evaluación adicional.",
      },
    ],
  },

  arthritis: {
    heroSubtitle:
      "La rigidez y el dolor articular no tienen que limitar tu vida diaria — te ayudamos a mantenerte fuerte, móvil y activo.",
    overview: [
      "La artritis causa inflamación, rigidez y dolor en una o más articulaciones, y tiende a empeorar con el tiempo sin un manejo adecuado. Aunque no siempre se puede revertir, la combinación correcta de movimiento, terapia manual y manejo del dolor puede mejorar drásticamente cómo te sientes día a día.",
      "Nuestro enfoque se centra en mantener las articulaciones afectadas lo más móviles y bien soportadas posible, para que la artritis interfiera lo menos posible con tu vida.",
    ],
    commonCauses: [
      "Osteoartritis por el desgaste articular con el tiempo",
      "Artritis reumatoide y otras condiciones autoinmunes",
      "Lesiones articulares pasadas que se desarrollan en artritis post-traumática",
      "Genética e historial familiar",
      "Estrés articular excesivo por trabajo o actividad repetitiva",
      "Soporte muscular reducido alrededor de una articulación que envejece",
    ],
    symptoms: [
      "Rigidez articular, especialmente por la mañana o después de descansar",
      "Hinchazón alrededor de una o más articulaciones",
      "Dolor que empeora con la actividad o cambios de clima",
      "Rango de movimiento reducido",
      "Una sensación de rechinar o chasquido en la articulación",
      "Debilidad muscular alrededor de la articulación afectada",
    ],
    ifTreatedEarly:
      "Manejar la artritis temprano con terapia basada en movimiento ayuda a preservar la función articular y la fuerza muscular por mucho más tiempo, y puede desacelerar significativamente qué tan rápido progresan los síntomas.",
    ifLeftUntreated:
      "Los síntomas de artritis no manejados tienden a llevar a un aumento de rigidez y debilidad muscular alrededor de la articulación, lo que puede acelerar la pérdida de movilidad y hacer que las tareas diarias básicas sean progresivamente más difíciles.",
    howWeTreatIt: [
      "Una evaluación articulación por articulación de movilidad, fuerza y patrones de dolor",
      "Terapia física para mantener el rango de movimiento y construir fuerza muscular de soporte",
      "Atención quiropráctica y terapia manual para aliviar la rigidez en las articulaciones circundantes",
      "Acupuntura como opción libre de medicamentos para el manejo continuo del dolor",
      "Guía sobre ritmo de actividad y protección articular para la vida diaria",
    ],
    faqs: [
      {
        question: "¿Puede la terapia física ayudar con la artritis aunque no se pueda curar?",
        answer:
          "Sí — aunque la terapia no puede revertir los cambios articulares, puede reducir significativamente el dolor y preservar la función manteniendo fuertes los músculos alrededor de la articulación y móvil la articulación misma.",
      },
      {
        question: "¿Es seguro hacer ejercicio con artritis?",
        answer:
          "Generalmente sí, y a menudo se recomienda — te guiamos hacia el movimiento que apoya la articulación sin agravarla.",
      },
      {
        question: "¿Realmente afecta el clima a mi dolor de artritis?",
        answer:
          "Muchos pacientes sí notan más rigidez con clima frío o húmedo, aunque la razón exacta no se entiende completamente — mantenerse activo tiende a ayudar de todas formas.",
      },
    ],
  },

  "whiplash-auto-injury": {
    heroSubtitle:
      "Incluso una colisión a baja velocidad puede causar una lesión real — evaluamos y tratamos las lesiones de accidentes automovilísticos desde el primer día.",
    overview: [
      "Los accidentes automovilísticos pueden causar lesiones que no son obvias de inmediato, ya que la adrenalina y el shock a menudo enmascaran el dolor en las primeras horas o días. El latigazo cervical, el movimiento repentino de vaivén del cuello, es una de las lesiones de accidentes automovilísticos más comunes, pero los impactos también pueden afectar la espalda, hombros y articulaciones.",
      "Evaluamos todo el cuerpo después de un accidente, documentamos los hallazgos para cualquier reclamo relacionado, y construimos un plan de recuperación entre terapia física, atención quiropráctica y acupuntura.",
    ],
    commonCauses: [
      "Accidentes automovilísticos por alcance o impacto lateral",
      "Frenado repentino o colisiones a baja velocidad",
      "Accidentes de motocicleta y de peatones",
      "Incidentes con vehículos en el lugar de trabajo",
      "Caídas que ocurren como resultado de un accidente",
    ],
    symptoms: [
      "Dolor y rigidez de cuello, a menudo apareciendo uno o dos días después del accidente",
      "Dolores de cabeza que comienzan en la base del cráneo",
      "Dolor de espalda o espasmos musculares",
      "Mareo o dificultad para concentrarse",
      "Dolor de hombro o brazo",
      "Fatiga en los días posteriores al accidente",
    ],
    ifTreatedEarly:
      "Hacerte evaluar dentro de los primeros días después de un accidente — incluso si el dolor se siente leve — nos permite detectar y tratar lesiones antes de que progresen, y crea un registro médico claro conectado al incidente.",
    ifLeftUntreated:
      "Las lesiones de accidentes automovilísticos no tratadas a menudo se convierten en condiciones de dolor crónico, ya que el daño de tejido blando que no se rehabilita adecuadamente tiende a sanar con tejido cicatricial y rigidez duradera en lugar de función completa.",
    howWeTreatIt: [
      "Una evaluación de todo el cuerpo para identificar todas las lesiones relacionadas con el accidente, no solo la más obvia",
      "Terapia física para restaurar fuerza, movimiento y función",
      "Atención quiropráctica para abordar el latigazo cervical y problemas de alineación espinal",
      "Acupuntura para el manejo del dolor durante toda la recuperación",
      "Documentación para apoyar cualquier reclamo de seguro automovilístico o lesión personal",
    ],
    faqs: [
      {
        question: "Me siento bien después de mi accidente — ¿todavía necesito revisarme?",
        answer:
          "Sí, lo recomendamos — muchas lesiones de tejido blando y latigazo cervical no causan dolor notable hasta uno o dos días después del accidente.",
      },
      {
        question: "¿Trabajan con seguros de auto y casos de lesiones personales?",
        answer:
          "Sí, regularmente tratamos pacientes que se recuperan de accidentes automovilísticos y podemos proporcionar documentación para apoyar tu reclamo.",
      },
      {
        question: "¿Qué tan pronto después de un accidente debo comenzar el tratamiento?",
        answer:
          "Lo antes posible — la evaluación y tratamiento tempranos generalmente conducen a una recuperación más rápida y completa.",
      },
    ],
  },

  "sports-injuries": {
    heroSubtitle:
      "Ya sea un juego de fin de semana o entrenamiento competitivo, ayudamos a los atletas a recuperarse completamente y volver al juego de forma segura.",
    overview: [
      "Las lesiones deportivas van desde esguinces y distensiones repentinas hasta lesiones por sobreuso que se acumulan durante una temporada de entrenamiento. Recuperarse adecuadamente — no solo descansar hasta que el dolor desaparezca — es lo que previene que la misma lesión regrese una vez que vuelves a la actividad.",
      "Nuestro equipo construye planes de rehabilitación específicos para cada deporte que restauran la fuerza y los patrones de movimiento, para que regreses a tu deporte con confianza, no con vacilación.",
    ],
    commonCauses: [
      "Esguinces y distensiones por cambios repentinos de dirección",
      "Lesiones por sobreuso debido a entrenamiento repetitivo",
      "Lesiones de contacto directo o colisión",
      "Malos hábitos de calentamiento o recuperación",
      "Desequilibrios o debilidad muscular",
      "Volver a la actividad demasiado pronto después de una lesión previa",
    ],
    symptoms: [
      "Dolor que aparece durante o después de movimientos o actividades específicas",
      "Hinchazón o moretones alrededor del área lesionada",
      "Fuerza o potencia reducida en la extremidad afectada",
      "Inestabilidad o sensación de que la articulación pueda ceder",
      "Rigidez que limita tu rango de movimiento normal",
      "Dolor que regresa cada vez que intentas retomar el deporte",
    ],
    ifTreatedEarly:
      "Las lesiones deportivas tratadas con un plan de rehabilitación adecuado — en lugar de solo descanso — sanan más fuertes y son mucho menos propensas a recurrir una vez que regresas a tu deporte.",
    ifLeftUntreated:
      "Volver al deporte antes de que una lesión esté completamente rehabilitada es una de las causas más comunes de lesión repetida, a menudo en la misma área, y puede convertir una recuperación corta en un problema recurrente y persistente.",
    howWeTreatIt: [
      "Una evaluación de movimiento y fuerza específica para tu deporte y lesión",
      "Terapia física enfocada en fuerza, estabilidad y progresiones seguras de retorno al juego",
      "Atención quiropráctica para mantener toda la cadena cinética moviéndose bien",
      "Acupuntura para alivio del dolor durante temporadas activas de entrenamiento o competencia",
      "Un plan estructurado y basado en criterios de retorno al deporte",
    ],
    faqs: [
      {
        question: "¿Cuándo es seguro regresar a mi deporte?",
        answer:
          "Usamos puntos de referencia específicos de fuerza y movimiento, no solo cómo te sientes, para determinar cuándo es seguro regresar — esto reduce significativamente tu riesgo de volver a lesionarte.",
      },
      {
        question: "¿Puedo seguir entrenando mientras me recupero de una lesión deportiva?",
        answer:
          "A menudo sí, con modificaciones — te guiaremos sobre qué ajustar para que puedas mantenerte en forma mientras sana la lesión.",
      },
      {
        question: "¿Tratan tanto lesiones agudas como lesiones por sobreuso?",
        answer:
          "Sí, tratamos tanto lesiones deportivas repentinas como condiciones graduales de sobreuso como la tendinitis o reacciones de estrés.",
      },
    ],
  },

  "post-surgical-rehab": {
    heroSubtitle:
      "La cirugía es solo una parte de la recuperación — la rehabilitación adecuada es lo que restaura tu fuerza, movimiento y confianza.",
    overview: [
      "Recuperarse de una cirugía — ya sea un reemplazo articular, reparación de ligamentos, o un procedimiento espinal — depende en gran medida de la rehabilitación que sigue. Sin un plan estructurado, los músculos alrededor del sitio quirúrgico pueden permanecer débiles y rígidos mucho después de que la incisión haya sanado.",
      "Trabajamos de cerca con el protocolo de tu cirujano para guiarte de forma segura a través de cada fase de la recuperación, desde el trabajo temprano de movilidad hasta un retorno completo a la actividad normal.",
    ],
    commonCauses: [
      "Cirugía de reemplazo articular (cadera, rodilla, hombro)",
      "Reparación de ligamentos, como reconstrucción de LCA",
      "Cirugía espinal",
      "Cirugía de reparación del manguito rotador o tendón",
      "Reparación de fracturas con fijación quirúrgica",
    ],
    symptoms: [
      "Rigidez y rango de movimiento limitado alrededor del sitio quirúrgico",
      "Debilidad muscular por un periodo de actividad reducida",
      "Hinchazón que persiste más de lo esperado",
      "Dificultad con patrones normales de caminar o movimiento",
      "Aprensión sobre mover o cargar el área normalmente",
    ],
    ifTreatedEarly:
      "Comenzar la rehabilitación guiada tan pronto como tu cirujano te autorice generalmente lleva a un retorno más rápido de la fuerza y el movimiento, y ayuda a prevenir que se instale la rigidez o pérdida muscular.",
    ifLeftUntreated:
      "Saltarse la rehabilitación post-quirúrgica estructurada a menudo lleva a rigidez, debilidad y patrones de movimiento alterados duraderos — a veces requiriendo un tratamiento más intensivo después para recuperar la función que la rehabilitación temprana habría preservado.",
    howWeTreatIt: [
      "Coordinación con el protocolo y cronograma post-operatorio de tu cirujano",
      "Terapia física por fases progresando de movilidad suave a fortalecimiento completo",
      "Terapia manual para abordar el tejido cicatricial y la rigidez articular circundante",
      "Acupuntura para ayudar a manejar el dolor post-quirúrgico",
      "Un retorno gradual y basado en criterios a las actividades diarias, el trabajo, o el deporte",
    ],
    faqs: [
      {
        question: "¿Qué tan pronto después de la cirugía puedo comenzar terapia física?",
        answer:
          "Depende de tu procedimiento y el protocolo de tu cirujano, pero muchos pacientes comienzan alguna forma de movimiento guiado dentro de días a un par de semanas después de la cirugía.",
      },
      {
        question: "¿Será dolorosa la terapia después de la cirugía?",
        answer:
          "Algo de molestia durante el trabajo temprano de movilidad es normal, pero programamos tu plan cuidadosamente para mantenernos dentro de límites seguros y apropiados para tu etapa de recuperación.",
      },
      {
        question: "¿Cuánto tiempo toma típicamente la rehabilitación post-quirúrgica?",
        answer:
          "Varía según el procedimiento, desde varias semanas hasta unos pocos meses, con tu progreso guiando cómo se ajusta el plan en el camino.",
      },
    ],
  },
};
