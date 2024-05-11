"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import VehicleForm from "./VehicleForm";
import { Close } from "@mui/icons-material";
import { createVehicle, getVehicleData } from "@/app/vehicles/actions";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import getVehicles from "@/components/Lookups/Vehicles/Vehicles";

export type FormData = {
  name?: string | null;
  registernumber: string | null;
  vin?: string | null;
  displacement?: number | null;
  horsepower?: number | null;
  kilowatt?: number | null;
  valves?: number | null;
  fueltype?: string | null;
  engine_type?: string | null;
  transmission_type?: string | null;
  transmission_manufacturer: null;
  gears?: number | null;
};

type VehicleDialogProps = {
  id?: number | null | undefined;
  open?: boolean;
  onClose?: () => void;
};

export default function VehicleDialog({
  id,
  open = false,
  onClose,
}: VehicleDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    name: null,
    registernumber: null,
    vin: null,
    displacement: null,
    horsepower: null,
    kilowatt: null,
    valves: null,
    fueltype: null,
    engine_type: null,
    transmission_type: null,
    transmission_manufacturer: null,
    gears: null,
  });

  const handleChange = useMemo(
    () => (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  useEffect(() => {
    const getVehicle = async () => {
      const vehicle = await getVehicles({ id: id || -1 });

      setFormData((prev) => ({ ...prev, ...vehicle[0] }));
    };

    getVehicle();
  }, []);

  const steps = ["General Data", "Engine", "Transmission"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      if (
        !/^[A-ZÆØÅ]{2}\d{5}$/.test(formData.registernumber?.toString() || "")
      ) {
        return alert("Register Number is invalid");
      }

      const res = await getVehicleData({
        registernumber: formData.registernumber?.toString() || "",
      });

      console.log("Kjøretøy", res);

      let kjoretoy = {
        kjoretoydataListe: [
          {
            kjoretoyId: {
              kjennemerke: "TF 21166",
              understellsnummer: "WAUZZZ8E55A518928",
            },
            forstegangsregistrering: {
              registrertForstegangNorgeDato: "2005-04-21",
            },
            kjennemerke: [
              {
                fomTidspunkt: "2005-04-21T00:00:00+02:00",
                kjennemerke: "TF 21166",
                kjennemerkekategori: "KJORETOY",
                kjennemerketype: {
                  kodeBeskrivelse: "Sorte tegn på hvit bunn",
                  kodeNavn: "Ordinære kjennemerker",
                  kodeVerdi: "ORDINART",
                  tidligereKodeVerdi: [],
                },
              },
            ],
            registrering: {
              fomTidspunkt: "2023-10-07T08:24:23.697+02:00",
              kjoringensArt: {
                kodeBeskrivelse: "Annen egentransport.",
                kodeNavn: "Egentransport",
                kodeVerdi: "EGENTRANSP_ANNEN",
                tidligereKodeVerdi: [],
              },
              registreringsstatus: {
                kodeBeskrivelse: "Registrert",
                kodeVerdi: "REGISTRERT",
                tidligereKodeVerdi: [],
              },
              registrertForstegangPaEierskap: "2023-10-07T08:24:23.697+02:00",
            },
            godkjenning: {
              forstegangsGodkjenning: {
                forstegangRegistrertDato: "2005-04-21",
                godkjenningsId: "1001049773664",
                godkjenningsundertype: {
                  kodeNavn: "COC",
                  kodeVerdi: "COC",
                  tidligereKodeVerdi: [],
                },
                gyldigFraDato: "2005-03-17",
                gyldigFraDatoTid: "2005-03-17T00:00:00+01:00",
                unntak: [],
              },
              kjoretoymerknad: [
                {
                  merknad:
                    "EGENVEKT OG NYTTELAST ER VEILEDENDE-AVHENGIG AV UTSTYRSNIVÅ ",
                  merknadtypeKode: "TYPEGODKJENNINGSMERKNAD",
                },
              ],
              registreringsbegrensninger: {
                registreringsbegrensning: [],
              },
              tekniskGodkjenning: {
                godkjenningsId: "6832590",
                godkjenningsundertype: {
                  kodeNavn: "Godkjenning av ombygget kjøretøy",
                  kodeVerdi: "OMBYGGING",
                  tidligereKodeVerdi: [],
                },
                gyldigFraDato: "2023-11-23",
                gyldigFraDatoTid: "2023-11-23T12:16:03+01:00",
                kjoretoyklassifisering: {
                  beskrivelse: "Personbil",
                  efTypegodkjenning: {
                    typegodkjenningNrTekst: "e1*2001/116*0151*11",
                    typegodkjenningnummer: {
                      direktiv: "2001/116",
                      land: "e1",
                      serie: "0151",
                      utvidelse: "11",
                    },
                    variant: "ABKEF1",
                    versjon: "FM52FGR8E700GGP",
                  },
                  kjoretoyAvgiftsKode: {
                    kodeBeskrivelse: "Personbil, unntatt ambulanse",
                    kodeNavn: "Personbil",
                    kodeVerdi: "101",
                    tidligereKodeVerdi: [],
                  },
                  nasjonalGodkjenning: {
                    nasjonaltGodkjenningsAr: "2004",
                    nasjonaltGodkjenningsHovednummer: "5855",
                    nasjonaltGodkjenningsUndernummer: "214",
                  },
                  spesielleKjennetegn: "",
                  tekniskKode: {
                    kodeBeskrivelse:
                      "Bil for persontransport med høyst 8 sitteplasser i tillegg til førersetet (Personbil)",
                    kodeNavn: "Personbil",
                    kodeVerdi: "M1",
                    tidligereKodeVerdi: [],
                  },
                  tekniskUnderkode: {
                    kodeVerdi: "INGENKODE",
                    tidligereKodeVerdi: [],
                  },
                  iSamsvarMedTypegodkjenning: false,
                },
                tekniskeData: {
                  akslinger: {
                    akselGruppe: [
                      {
                        akselListe: {
                          aksel: [
                            {
                              avstandTilNesteAksling: 2660,
                              drivAksel: true,
                              id: 1,
                              plasseringAksel: "1",
                              sporvidde: 1525,
                              tekniskTillattAkselLast: 1050,
                            },
                          ],
                        },
                        id: 1,
                        plasseringAkselGruppe: "1",
                        tekniskTillattAkselGruppeLast: 1050,
                      },
                      {
                        akselListe: {
                          aksel: [
                            {
                              drivAksel: false,
                              id: 2,
                              plasseringAksel: "2",
                              sporvidde: 1530,
                              tekniskTillattAkselLast: 1080,
                            },
                          ],
                        },
                        id: 2,
                        plasseringAkselGruppe: "2",
                        tekniskTillattAkselGruppeLast: 1080,
                      },
                    ],
                    antallAksler: 2,
                  },
                  bremser: {
                    tilhengerBremseforbindelse: [],
                  },
                  dekkOgFelg: {
                    akselDekkOgFelgKombinasjon: [
                      {
                        akselDekkOgFelg: [
                          {
                            akselId: 1,
                            belastningskodeDekk: "86",
                            dekkdimensjon: "205/55R16",
                            felgdimensjon: "7JX16",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                          {
                            akselId: 2,
                            belastningskodeDekk: "87",
                            dekkdimensjon: "205/55R16",
                            felgdimensjon: "7JX16",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                        ],
                      },
                      {
                        akselDekkOgFelg: [
                          {
                            akselId: 1,
                            belastningskodeDekk: "86",
                            dekkdimensjon: "215/55R16",
                            felgdimensjon: "7JX16",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                          {
                            akselId: 2,
                            belastningskodeDekk: "87",
                            dekkdimensjon: "215/55R16",
                            felgdimensjon: "7JX16",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                        ],
                      },
                      {
                        akselDekkOgFelg: [
                          {
                            akselId: 1,
                            belastningskodeDekk: "86",
                            dekkdimensjon: "215/650R440",
                            felgdimensjon: "205X440",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                          {
                            akselId: 2,
                            belastningskodeDekk: "87",
                            dekkdimensjon: "215/650R440",
                            felgdimensjon: "205X440",
                            hastighetskodeDekk: "U",
                            innpress: "42",
                            tvilling: false,
                          },
                        ],
                      },
                    ],
                  },
                  dimensjoner: {
                    bredde: 1770,
                    lengde: 4590,
                  },
                  generelt: {
                    fabrikant: [],
                    handelsbetegnelse: ["AUDI A4, S4"],
                    merke: [
                      {
                        merke: "AUDI",
                        merkeKode: "1230",
                      },
                    ],
                    tekniskKode: {
                      kodeBeskrivelse:
                        "Bil for persontransport med høyst 8 sitteplasser i tillegg til førersetet (Personbil)",
                      kodeNavn: "Personbil",
                      kodeVerdi: "M1",
                      tidligereKodeVerdi: [],
                    },
                    typebetegnelse: "8E",
                  },
                  karosseriOgLasteplan: {
                    antallDorer: [4],
                    avstandNavSkjermbueBak: 325,
                    avstandNavSkjermbueForan: 335,
                    dorUtforming: [],
                    fargeFjar: "blå",
                    karosseritype: {
                      kodeBeskrivelse:
                        "Stasjonsvogn ISO-standard 3833:1977, def. nr. 3.1.1.4",
                      kodeNavn: "Stasjonsvogn (AC)",
                      kodeTypeId: "TEKNISKEDATA.KAROSSERITYPE",
                      kodeVerdi: "AC",
                      tidligereKodeVerdi: [],
                    },
                    kjennemerketypeBak: {
                      kodeBeskrivelse: "Stort smalt",
                      kodeNavn: "Stort smalt",
                      kodeTypeId: "TEKNISKEDATA.KJENNEMERKESTORRELSE",
                      kodeVerdi: "SS",
                      tidligereKodeVerdi: [],
                    },
                    kjennemerkestorrelseBak: {
                      kodeBeskrivelse: "Stort smalt",
                      kodeNavn: "Stort smalt",
                      kodeTypeId: "TEKNISKEDATA.KJENNEMERKESTORRELSE",
                      kodeVerdi: "SS",
                      tidligereKodeVerdi: [],
                    },
                    kjennemerketypeForan: {
                      kodeBeskrivelse: "Stort smalt",
                      kodeNavn: "Stort smalt",
                      kodeTypeId: "TEKNISKEDATA.KJENNEMERKESTORRELSE",
                      kodeVerdi: "SS",
                      tidligereKodeVerdi: [],
                    },
                    kjennemerkestorrelseForan: {
                      kodeBeskrivelse: "Stort smalt",
                      kodeNavn: "Stort smalt",
                      kodeTypeId: "TEKNISKEDATA.KJENNEMERKESTORRELSE",
                      kodeVerdi: "SS",
                      tidligereKodeVerdi: [],
                    },
                    kjoringSide: "HOYRE",
                    oppbygningUnderstellsnummer: "??????8E?????????",
                    plasseringAvDorer: {
                      kodeBeskrivelse: "4 sidedører",
                      kodeNavn: "4 sidedører",
                      kodeTypeId: "TEKNISKEDATA.PLASSERINGDORER",
                      kodeVerdi: "4_SIDE",
                      tidligereKodeVerdi: [],
                    },
                    plasseringFabrikasjonsplate: [
                      {
                        kodeBeskrivelse: "Motorrom - Høyre - Foran",
                        kodeNavn: "Motorrom - høyre foran",
                        kodeTypeId: "TEKNISKEDATA.PLASSERINGMERKING",
                        kodeVerdi: "MOTORROM_HOYRE_FORAN",
                        tidligereKodeVerdi: [],
                      },
                    ],
                    plasseringUnderstellsnummer: [
                      {
                        kodeBeskrivelse: "Motorrom - Bak",
                        kodeNavn: "Motorrom - bak",
                        kodeTypeId: "TEKNISKEDATA.PLASSERINGMERKING",
                        kodeVerdi: "MOTORROM_BAK",
                        tidligereKodeVerdi: [],
                      },
                    ],
                    rFarge: [
                      {
                        kodeNavn: "Blå",
                        kodeTypeId: "TEKNISKEDATA.KAROSSERIFARGE",
                        kodeVerdi: "03",
                        tidligereKodeVerdi: [],
                      },
                    ],
                  },
                  miljodata: {
                    euroKlasse: {
                      kodeBeskrivelse:
                        "Euro 4L - 70/220/EØF*2003/76/EF - omfatter også tunge bensin M og N",
                      kodeNavn: "Euro 4L - 70/220/EØF*2003/76/EF",
                      kodeTypeId: "TEKNISKEDATA.AVGASSKODE",
                      kodeVerdi: "4L",
                      tidligereKodeVerdi: [],
                    },
                    miljoOgdrivstoffGruppe: [
                      {
                        drivstoffKodeMiljodata: {
                          kodeBeskrivelse: "Diesel",
                          kodeNavn: "Diesel",
                          kodeTypeId: "TEKNISKEDATA.DRIVSTOFFTYPE",
                          kodeVerdi: "2",
                          tidligereKodeVerdi: [],
                        },
                        forbrukOgUtslipp: [
                          {
                            co2BlandetKjoring: 157,
                            forbrukBlandetKjoring: 5.8,
                            malemetode: {
                              kodeBeskrivelse: "Annen",
                              kodeNavn: "MALEMETODETYPE_ANNEN",
                              kodeTypeId: "MALEMETODETYPE",
                              kodeVerdi: "ANNEN",
                              tidligereKodeVerdi: [],
                            },
                            partikkelfilterFabrikkmontert: false,
                            utslippNOxMgPrKm: 237,
                            utslippPartiklerMgPrKm: 17,
                          },
                        ],
                        lyd: {
                          standstoy: 76,
                          stoyMalingOppgittAv: {
                            kodeBeskrivelse: "Produsent",
                            kodeNavn: "Produsent",
                            kodeTypeId: "TEKNISKEDATA.KILDE_STOYMALING",
                            kodeVerdi: "1",
                            tidligereKodeVerdi: [],
                          },
                          vedAntallOmdreininger: 3000,
                        },
                      },
                    ],
                    okoInnovasjon: false,
                  },
                  motorOgDrivverk: {
                    girkassetype: {
                      kodeBeskrivelse: "Manuell",
                      kodeNavn: "Manuell",
                      kodeTypeId: "TEKNISKEDATA.GIRKASSETYPE",
                      kodeVerdi: "M",
                      tidligereKodeVerdi: [],
                    },
                    girutvekslingPrGir: [],
                    hybridKategori: {
                      kodeBeskrivelse: "Ingen eller ikke relevant",
                      kodeNavn: "Ingen",
                      kodeTypeId: "TEKNISKEDATA.HYBRIDKATEGORI",
                      kodeVerdi: "INGEN",
                      tidligereKodeVerdi: [],
                    },
                    maksimumHastighet: [197],
                    maksimumHastighetMalt: [],
                    motor: [
                      {
                        drivstoff: [
                          {
                            drivstoffKode: {
                              kodeBeskrivelse: "Diesel",
                              kodeNavn: "Diesel",
                              kodeTypeId: "TEKNISKEDATA.DRIVSTOFFTYPE",
                              kodeVerdi: "2",
                              tidligereKodeVerdi: [],
                            },
                            maksNettoEffekt: 85,
                          },
                        ],
                        motorKode: "BKE",
                        slagvolum: 1896,
                      },
                    ],
                    utelukkendeElektriskDrift: false,
                  },
                  ovrigeTekniskeData: [],
                  persontall: {
                    sitteplasserForan: 2,
                    sitteplasserTotalt: 5,
                  },
                  tilhengerkopling: {
                    kopling: [],
                  },
                  vekter: {
                    egenvekt: 1626,
                    egenvektMinimum: 1450,
                    nyttelast: 299,
                    tillattTaklast: 75,
                    tillattTilhengervektMedBrems: 1500,
                    tillattTilhengervektUtenBrems: 750,
                    tillattTotalvekt: 2000,
                    tillattVertikalKoplingslast: 80,
                    tillattVogntogvekt: 3545,
                    vogntogvektAvhBremsesystem: [],
                  },
                },
                unntak: [],
              },
              tilleggsgodkjenninger: [],
            },
            periodiskKjoretoyKontroll: {
              kontrollfrist: "2025-06-30",
              sistGodkjent: "2023-06-22",
            },
          },
        ],
      };

      const vehicle = kjoretoy.kjoretoydataListe[0]; //res.kjoretoydataListe[0];

      setFormData((prev) => ({
        ...prev,
        vin: vehicle.kjoretoyId.understellsnummer,
        transmission_type:
          vehicle.godkjenning.tekniskGodkjenning.tekniskeData.motorOgDrivverk
            .girkassetype.kodeVerdi,
        displacement:
          vehicle.godkjenning.tekniskGodkjenning.tekniskeData.motorOgDrivverk
            .motor[0].slagvolum,
        fueltype:
          vehicle.godkjenning.tekniskGodkjenning.tekniskeData.motorOgDrivverk
            .motor[0].drivstoff[0].drivstoffKode.kodeNavn,
      }));
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    // Finish
    if (activeStep >= steps.length - 1) {
      try {
        await createVehicle({ message: "" }, formData);
        onClose?.();
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleClose = () => {
    setFormData({
      name: null,
      registernumber: null,
      vin: null,
      displacement: null,
      horsepower: null,
      kilowatt: null,
      valves: null,
      fueltype: null,
      engine_type: null,
      transmission_type: null,
      transmission_manufacturer: null,
      gears: null,
    });

    onClose?.();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
      <DialogTitle>{id ? "Edit Vehicle" : "New Vehicle"}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <Close />
      </IconButton>
      {open && (
        <>
          <DialogContent>
            <VehicleForm
              id={id || undefined}
              steps={steps}
              activeStep={activeStep}
              isStepOptional={isStepOptional}
              isStepSkipped={isStepSkipped}
              formData={formData}
              handleChange={handleChange}
            />
          </DialogContent>
          <DialogActions sx={{ justifyContent: "" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0 || activeStep === steps.length}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep >= steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
