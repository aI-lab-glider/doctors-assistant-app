import * as Yup from "yup";

const physicalExaminationValidationSchema = Yup.object().shape({
  general_conditions: Yup.string()
    .oneOf(["dobry", "średni", "ciężki"])
    .required("Stan ogólny jest wymaganym polem")
    .label("Stan ogólny"),
  blood_pressure: Yup.string().label("Ciśnienie tętnicze"),
  pulse: Yup.string().label("Tętno"),
  body_temperature: Yup.string().label("Ciepłota ciała"),
  body_build_type: Yup.string()
    .oneOf(["normosteniczna", "hyposteniczna", "hypersteniczna"])
    .required("Budowa ciała jest wymaganym polem")
    .label("Budowa ciała"),
  skin_appearance: Yup.string().label("Skóra i tk. podskórna - wygląd"),
  skin_colour: Yup.string().label("Skóra i tk. podskórna - barwa"),
  skin_humidity: Yup.string().label("Skóra i tk. podskórna - wilgotność"),
  skin_swelling: Yup.string().label("Skóra i tk. podskórna - obrzęki"),
  skin_scars: Yup.string().label("Blizny i ślady po samouszkodzeniach"),
  lymphatic_gland_examined: Yup.bool()
    .required("Obwodowe węzły chłonne jest wymaganym polem")
    .label("Obwodowe węzły chłonne"),
  head_appearance_choice: Yup.bool().label(
    "Głowa wysklepiona symetrycznie, prawidłowo"
  ),
  head_appearance: Yup.string().label("Głowa - wygląd"),
  head_percussion_tenderness: Yup.string().label("Głowa - bolesność opukowo"),
  head_eyeballs: Yup.string().label("Gałki oczne"),
  ears: Yup.string().label("Uszy"),
  nose: Yup.string().label("Nos"),
  mouth_teeth: Yup.string()
    .oneOf(["nieuporządkowane", "uporządkowane", "zaprotezowane"])
    .required("Jama ustna i uzębienie jest wymaganym polem")
    .label("Jama ustna i uzębienie"),
  mucous_membrane_choice: Yup.string().label("Błony śluzowe"),
  mucous_membrane: Yup.string().label("Błony śluzowe"),
  neck_throat_tonsil: Yup.string().label("Gardło i migdałki"),
  neck_appearance: Yup.string().label("Szyja - wygląd"),
  neck_thyroid_choice: Yup.string().label("Tarczyca"),
  neck_thyroid: Yup.string().label("Tarczyca"),
  chest_choice: Yup.string().label("Klatka piersiowa"),
  chest: Yup.string().label("Klatka piersiowa"),
  breath_frequency: Yup.string().label("Częstość oddechów/min"),
  chest_percussion_choice: Yup.string()
    .oneOf(["wypuk jawny", "wypuk stłumiony"])
    .label("Klatka piersiowa - opukiwanie"),
  chest_percussion: Yup.string().label("Klatka piersiowa - opukiwanie"),
  chest_auscultation_choice: Yup.bool().label(
    "Klatka piersiowa - osłuchiwanie"
  ),
  chest_auscultation: Yup.string().label("Klatka piersiowa - osłuchiwanie"),
  cardiovascular_appearance: Yup.string().label("Układ krążenia - oglądanie"),
  cardiovascular_efficient: Yup.string().label("Układ krążenia - wydolny"),
  cardiovascular_auscultation: Yup.string().label(
    "Układ krążenia - osłuchiwano"
  ),
  cardiovascular_pulse_choice: Yup.bool()
    .nullable()
    .label(
      "Tętno na tt. promieniowych i grzbietowych stopy zgodne z akcją serca"
    ),
  cardiovascular_pulse: Yup.string().label(
    "Tętno na tt. promieniowych i grzbietowych stopy zgodne z akcją serca"
  ),
  stomach: Yup.string()
    .oneOf([
      "wysklepiony w poziomie klp",
      "wysklepiony ponad poziom klp",
      "poniżej poziomu klp",
    ])
    .required("Brzuch jest wymaganym polem")
    .label("Brzuch"),
  stomach_hernia: Yup.string().label("Brzuch - przepukliny"),
  stomach_painless: Yup.string().label("Brzuch - niebolesny"),
  stomach_auscultation: Yup.string().label("Brzuch - osłuchowo perystaltyka"),
  stomach_percussion: Yup.string().label("Brzuch - opukiwanie"),
  stomach_physical_examination: Yup.string().label("Brzuch - badanie dotykiem"),
  stomach_symptoms: Yup.string().label("Brzuch - objawy"),
  legs_swelling: Yup.string().label("Kończyny dolne - obrzęki"),
  legs_veins: Yup.string().label("Kończyny dolne - układ żylny"),
  locomotor_joint_outline: Yup.bool()
    .required("Obrysy stawów jest wymaganym polem")
    .label("Układ ruchowy - obrysy stawów"),
  locomotor_limb_mobility: Yup.bool()
    .required(
      "Ruchomość bierna i czynna w stawach kończyn jest wymaganym polem"
    )
    .label("Układ ruchowy - ruchomość bierna i czynna w stawach kończyn"),
  muscle_strength_tension: Yup.bool()
    .required("Siła i napięcie mięśniowe jest wymaganym polem")
    .label("Układ ruchowy - siła i napięcie mięśniowe"),
  nervous_meningeal_signs: Yup.string().label("Układ ruchowy - objawy oponowe"),
  nervous_focal_damage: Yup.string().label(
    "Objawy ogniskowego uszkodzenia systemu nerwowego"
  ),
});

export default physicalExaminationValidationSchema;
