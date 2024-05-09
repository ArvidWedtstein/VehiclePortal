"use client";

import { Add, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, Fragment, useMemo, useState } from "react";
import EnginesAutocomplete from "../Lookups/Engines/EnginesAutocomplete";
import TransmissionsAutocomplete from "../Lookups/Transmissions/TransmissionsAutocomplete";
import { createVehicle, getVehicleData } from "@/app/vehicles/actions";
import { useFormState } from "react-dom";

type VehicleDialogProps = {
  vehicle_id?: number;
};
export default function VehicleDialog(props: VehicleDialogProps) {
  const [open, setOpen] = useState(false);

  type FormData = {
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

  const [state, formAction] = useFormState(createVehicle, { message: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
    setSkipped(new Set<number>());

    state.message = "";

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
  };

  const steps = ["General Data", "Engine", "Transmission"];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async (event: FormEvent) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      const formData = new FormData((event.target as HTMLButtonElement)!.form!);

      if (
        !/^[A-ZÆØÅ]{2}\d{5}$/.test(
          formData.get("registernumber")?.toString() || ""
        )
      ) {
        return (state.message = "Register Number is invalid");
      }

      state.message = "";

      const res = await getVehicleData({
        registernumber: formData.get("registernumber")?.toString() || "",
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
      let form = (event.target as HTMLButtonElement)?.form;
      form?.requestSubmit();
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

  return (
    <Fragment>
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
        variant="outlined"
      >
        <CardActionArea onClick={handleClickOpen} sx={{ height: "100%" }}>
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Add />
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          component: "form",
          action: formAction,
        }}
      >
        <DialogTitle>
          {props.vehicle_id ? "Edit Vehicle" : "New Vehicle"}
        </DialogTitle>
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
        <DialogContent>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="registernumber"
                name="registernumber"
                label="Register Number"
                type="text"
                value={formData.registernumber}
                onChange={handleChange}
                fullWidth
                required
                variant="standard"
                placeholder="AB 12345"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="vin"
                name="vin"
                label="Vehicle Identification Number (VIN)"
                type="text"
                value={formData.vin}
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EnginesAutocomplete />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="displacement"
                name="displacement"
                label="Displacement"
                type="text"
                fullWidth
                value={formData.displacement}
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">ccm</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="horsepower"
                name="horsepower"
                label="Horsepower"
                type="number"
                fullWidth
                value={formData.horsepower}
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="kilowatt"
                name="kilowatt"
                label="Kilowatt"
                type="number"
                fullWidth
                value={formData.kilowatt}
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">kW</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="standard" margin="dense">
                <InputLabel id="fuel-type-label">Fuel</InputLabel>
                <Select
                  labelId="fuel-type-label"
                  id="fuel-type"
                  label="Fuel"
                  name="fueltype"
                  value={formData.fueltype}
                  onSelect={handleChange}
                >
                  <MenuItem value={"gasoline"}>Gasoline</MenuItem>
                  <MenuItem value={"diesel"}>Diesel</MenuItem>
                  <MenuItem value={"Jet Fuel"}>Jet Fuel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="standard" margin="dense">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="fuel-type"
                  label="Type"
                  name="engine_type"
                  value={formData.engine_type}
                  onSelect={handleChange}
                >
                  <MenuItem value={"inline-4"}>Inline 4</MenuItem>
                  <MenuItem value={"V6"}>V6</MenuItem>
                  <MenuItem value={"V8"}>V8</MenuItem>
                  <MenuItem value={"V12"}>V12</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="valves"
                name="valves"
                label="Valves"
                type="number"
                value={formData.valves}
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TransmissionsAutocomplete />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="gear"
                name="gear"
                label="Gears"
                type="number"
                fullWidth
                value={formData.gears}
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="transmission_manufacturer"
                name="transmission_manufacturer"
                label="Manufacturer"
                type="text"
                fullWidth
                value={formData.transmission_manufacturer}
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="standard" margin="dense">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="fuel-type"
                  label="Type"
                  name="transmission-type"
                  value={formData.transmission_type}
                  onSelect={handleChange}
                >
                  <MenuItem value={"M"}>Manual</MenuItem>
                  <MenuItem value={"A"}>Automatic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography aria-live="polite" className="sr-only" role="status">
            {state.message}
          </Typography>
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
      </Dialog>
    </Fragment>
  );
}
