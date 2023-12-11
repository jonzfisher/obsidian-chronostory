/*
This abstraction for CodeBlockProcessor originated from:
https://github.com/nekoshita/obsidian-auto-card-link/blob/main/src/code_block_processor.ts#L7
*/
import { App } from 'obsidian';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Moment } from 'store/momentsSlice';
import { generateUUID } from 'store/uuid';
import StoryClock from "../clock/StoryClock";

export class CodeBlockProcessor {
  app: App;
  runtime: number;
  separator: string;
  moments: Moment[]

  constructor(app: App) {
    this.app = app;
    this.separator = "\u00A0" 
    this.moments = [] as Moment[]
  }

  run(source: string, el: HTMLElement) {
      this.processSource(source); 
      
			const storyclockview = createRoot(el);
			storyclockview.render(
				<StrictMode>
					<StoryClock duration={this.runtime} moments={this.moments} />
				</StrictMode>
			);
  }


  // split frontmatter from list of moments
  processSource(source: string) {
    const sourceLines = source.split("\n")
    this.processRuntime(sourceLines);
    this.processMoments(sourceLines);
  }

  // process the frontmatter into duration
  processRuntime(sourceLines: string[]) {
    const runtimeRows = sourceLines.filter((row) => row.startsWith("runtime"));
    const parts = runtimeRows[0]?.split("::");
    if (parts.length > 1) {
      this.runtime = this.timestampToSeconds(parts[1]); // to seconds
    } else {
      console.error("no valid runtime found")
    }
  } 
  // process list of timestamps and moments
  processMoments(sourceLines: string[]) {
    const regex = /^\d{2}:\d{2}:\d{2}\s+/;
    const momentRows = sourceLines.filter((row) => row.match(regex));
    console.log(momentRows);

    for (let i = 0; i < momentRows.length; i++) {
      const match = momentRows[i].match(regex);
      if(match) {
        debugger;
        const timestamp: number = this.timestampToSeconds(match[0]);
        const description: string = momentRows[i].replace(match[0], "");
        this.moments.push({
            id: generateUUID(),
            description: description,
            timestamp: timestamp,
            notes: '', 
            created_at: (new Date()).toString(),
          }
        );
      }
    }
  } 

  // process each moment's timestamp
  timestampToSeconds(timestamp: string){
    const [hoursStr, minutesStr, secondsStr] = timestamp.split("\u003A"); 

    const hours: number = Number(hoursStr);
    const minutes: number = Number(minutesStr);
    const seconds: number = Number(secondsStr);
    return seconds + 60 * minutes + 3600 * hours;
  }

  isValid = (val: string) => {
    // This will make sure we're all numbers on this input
    const regexp = /^\d{0,2}(?:\u00A0\d{0,2})?(?:\u00A0\d{0,2})?$/;
  
    const [hoursStr, minutesStr, secondsStr] = val.split("\u003A");
  
    if (!regexp.test(val)) {
        return false;
    }
  
    const hours: number = Number(hoursStr);
    const minutes: number = Number(minutesStr);
    const seconds: number = Number(secondsStr);
  
    const isValidHour = (hour: number) => Number.isInteger(hour) && hour >= 0 && hour <= 99;
    const isValidMinutes = (minutes: number) => (Number.isInteger(minutes) && minutes <= 60) || Number.isNaN(minutes);
    const isValidSeconds = (seconds: number) => (Number.isInteger(seconds) && seconds <= 60) || Number.isNaN(seconds);
  
    if (!(isValidHour(hours) && isValidMinutes(minutes) || isValidSeconds(seconds))) {
        return false;
    }
  
    // if (minutes < 10 && Number(minutesStr[0]) > 5) {
    //     return false;
    // }
  
    const valArr = val.indexOf(this.separator) !== -1
        ? val.split(this.separator)
        : [val];
  
    // check HH and mm and ss
    if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 99)) {
        return false;
    }
  
    if (valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)) {
        return false;
    }
    if (valArr[2] && valArr[2].length && (parseInt(valArr[2], 10) < 0 || parseInt(valArr[2], 10) > 59)) {
        return false;
    }
  
    return true;
  }
}