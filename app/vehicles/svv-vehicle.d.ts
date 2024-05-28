// vehicle.d.ts

declare module "vehicle" {
  export type Vehicle = {
    kjoretoydataListe: KjoretoyData[];
  };

  export type KjoretoyData = {
    kjoretoyId: {
      kjennemerke: string;
      understellsnummer: string;
    };
    forstegangsregistrering: {
      registrertForstegangNorgeDato: string;
    };
    kjennemerke: Kjennemerke[];
    registrering: {
      fomTidspunkt: string;
      kjoringensArt: KjoringensArt;
      registreringsstatus: Registreringsstatus;
      registrertForstegangPaEierskap: string;
    };
    godkjenning: {
      forstegangsGodkjenning: ForstegangsGodkjenning;
      kjoretoymerknad: any[];
      registreringsbegrensninger: { registreringsbegrensning: any[] };
      tekniskGodkjenning: TekniskGodkjenning;
      tilleggsgodkjenninger: any[];
    };
  };

  export type Kjennemerke = {
    fomTidspunkt: string;
    kjennemerke: string;
    kjennemerkekategori: string;
    kjennemerketype: {
      kodeBeskrivelse: string;
      kodeNavn: string;
      kodeVerdi: string;
      tidligereKodeVerdi: string[];
    };
  };

  export type KjoringensArt = {
    kodeBeskrivelse: string;
    kodeNavn: string;
    kodeVerdi: string;
    tidligereKodeVerdi: string[];
  };

  export type Registreringsstatus = {
    kodeBeskrivelse: string;
    kodeVerdi: string;
    tidligereKodeVerdi: string[];
  };

  export type ForstegangsGodkjenning = {
    forstegangRegistrertDato: string;
    godkjenningsId: string;
    godkjenningsundertype: {
      kodeNavn: string;
      kodeVerdi: string;
      tidligereKodeVerdi: string[];
    };
    gyldigFraDato: string;
    gyldigFraDatoTid: string;
    kvalitetskodeForstegangRegDato: {
      kodeBeskrivelse: string;
      kodeNavn: string;
      kodeVerdi: string;
      tidligereKodeVerdi: string[];
    };
    unntak: any[];
  };

  export type TekniskGodkjenning = {
    godkjenningsId: string;
    godkjenningsundertype: {
      kodeNavn: string;
      kodeVerdi: string;
      tidligereKodeVerdi: string[];
    };
    gyldigFraDato: string;
    gyldigFraDatoTid: string;
    kjoretoyklassifisering: {
      beskrivelse: string;
      efTypegodkjenning: {
        typegodkjenningNrTekst: string;
        typegodkjenningnummer: {
          direktiv: string;
          land: string;
          serie: string;
          utvidelse: string;
        };
        variant: string;
      };
      kjoretoyAvgiftsKode: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      nasjonalGodkjenning: {
        nasjonaltGodkjenningsAr: string;
        nasjonaltGodkjenningsHovednummer: string;
        nasjonaltGodkjenningsUndernummer: string;
      };
      spesielleKjennetegn: string;
      tekniskKode: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      tekniskUnderkode: {
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      iSamsvarMedTypegodkjenning: boolean;
    };
    krav: {
      kravomrade: {
        kodeBeskrivelse: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      kravoppfyllelse: {
        kodeBeskrivelse: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
    }[];
    tekniskeData: TekniskeData;
    unntak: any[];
  };

  export type TekniskeData = {
    akslinger: {
      akselGruppe: {
        akselListe: {
          aksel: {
            avstandTilNesteAksling: number;
            drivAksel: boolean;
            egenvektAksel: number;
            id: number;
            plasseringAksel: string;
            tekniskTillattAkselLast: number;
          }[];
        };
        egenvektAkselGruppe: number;
        id: number;
        plasseringAkselGruppe: string;
        tekniskTillattAkselGruppeLast: number;
      }[];
      antallAksler: number;
    };
    bremser: {
      tilhengerBremseforbindelse: any[]; // Update with actual type if available
    };
    dekkOgFelg: {
      akselDekkOgFelgKombinasjon: {
        akselDekkOgFelg: {
          akselId: number;
          belastningskodeDekk: string;
          dekkdimensjon: string;
          felgdimensjon: string;
          hastighetskodeDekk: string;
        }[];
      }[];
    };
    dimensjoner: {
      bredde: number;
      lengde: number;
    };
    generelt: {
      fabrikant: any[]; // Update with actual type if available
      handelsbetegnelse: string[];
      merke: {
        merke: string;
        merkeKode: string;
      }[];
      tekniskKode: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      typebetegnelse: string;
    };
    karosseriOgLasteplan: {
      antallDorer: any[]; // Update with actual type if available
      dorUtforming: any[]; // Update with actual type if available
      kjennemerketypeBak: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      kjennemerkestorrelseBak: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      oppbygningUnderstellsnummer: string;
      plasseringFabrikasjonsplate: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      }[];
      plasseringUnderstellsnummer: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      }[];
      rFarge: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      }[];
    };
    miljodata: {
      lyddemperUtblas: string;
      miljoOgdrivstoffGruppe: {
        drivstoffKodeMiljodata: {
          kodeBeskrivelse: string;
          kodeNavn: string;
          kodeTypeId: string;
          kodeVerdi: string;
          tidligereKodeVerdi: string[];
        };
        lyd: {
          standstoy: number;
          vedAntallOmdreininger: number;
        };
      }[];
      okoInnovasjon: boolean;
    };
    motorOgDrivverk: {
      girkassetype: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      girutvekslingPrGir: any[]; // Update with actual type if available
      hybridKategori: {
        kodeBeskrivelse: string;
        kodeNavn: string;
        kodeTypeId: string;
        kodeVerdi: string;
        tidligereKodeVerdi: string[];
      };
      maksimumHastighet: number[];
      maksimumHastighetMalt: any[]; // Update with actual type if available
      motor: {
        antallSylindre: number;
        drivstoff: {
          drivstoffKode: {
            kodeBeskrivelse: string;
            kodeNavn: string;
            kodeTypeId: string;
            kodeVerdi: string;
            tidligereKodeVerdi: string[];
          };
          effektVektForhold: number;
          maksNettoEffekt: number;
        }[];
        motorKode: string;
        slagvolum: number;
      }[];
    };
    ovrigeTekniskeData: any[]; // Update with actual type if available
    persontall: {
      sitteplasserForan: number;
      sitteplasserTotalt: number;
    };
    tilhengerkopling: {
      kopling: any[]; // Update with actual type if available
    };
    vekter: {
      egenvekt: number;
      egenvektMinimum: number;
      nyttelast: number;
      tillattTotalvekt: number;
      vogntogvektAvhBremsesystem: any[]; // Update with actual type if available
    };
  };
}
