import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//standalone - bez modula, zavisnosti u imports
bootstrapApplication(App, appConfig).catch((err) => console.error(err));

//App komponenta je entry point aplikacije (ona importuje header, content i footer)
