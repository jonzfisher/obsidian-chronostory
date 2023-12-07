import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateUUID } from './uuid'

export interface Moment {
  id: string;
  description: string;
  timestamp: number,
  notes: string;
  created_at: string;
}

// const mockState = [
//   {
//     id: generateUUID(),
//     description: 'Spaceship - Keys and co show up - Spaceship leaves ET',
//     timestamp: 90,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott\'s house - dungeons and dragons',
//     timestamp: 415,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Baseball thrown back',
//     timestamp: 515,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott goes out and finds ET in field at night',
//     timestamp: 575,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Reese\'s Pieces - Elliott see Keys',
//     timestamp: 750,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Dinner scene - Mexico',
//     timestamp: 770,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott sleeps outside - ET shows up eating RP\'s',
//     timestamp: 1100,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott brings ET inside - falls asleep',
//     timestamp: 1150,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Keys finds RP\'s - Elliott fakes sick - shows ET his toys',
//     timestamp: 1480,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Umbrella scares ET and Elliott - implying connection',
//     timestamp: 1600,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Michael and Gertie meet ET - agree to keep him a secret',
//     timestamp: 1800,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Keys over suburbia',
//     timestamp: 1950,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Finding ET\'s home - flying planets',
//     timestamp: 2100,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'ET heals flowers',
//     timestamp: 2315,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Bus stop Uranus - Stuffed animals closet gag',
//     timestamp: 2350,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Beer and Frogs sequence - phone commercial',
//     timestamp: 2700,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'ET talks - B good - Phone home',
//     timestamp: 3000,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Keys in van - Dad\'s shirt - Peter Pan - Finger cut - Flowers dying',
//     timestamp: 3200,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Halloween - picture time - trick or treating',
//     timestamp: 3550,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott and ET bike ride in woods - FLYING!',
//     timestamp: 3650,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott and ET build machine - Keys and co enter home',
//     timestamp: 3800,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Next morning - ET missing - Elliott sick',
//     timestamp: 4000,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Michael evads cars on bike - finds albino ET',
//     timestamp: 4250,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Kids introduce Mom to ET - we\'re sick. I think we\'re dying',
//     timestamp: 4300,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'ASTRONAUT AT THE DOOR',
//     timestamp: 4450,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Tube over horizon - it\'s Peter Coyote time',
//     timestamp: 4550,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Keys and Elliott convo - when Keys was a boy',
//     timestamp: 4675,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Michael sleeping in closet - flowers dying',
//     timestamp: 5100,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'ET dies',
//     timestamp: 5150,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Elliott says goodbye',
//     timestamp: 5300,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Flowers come back to life! - ET alive',
//     timestamp: 5400,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Escape in van - tube sequence',
//     timestamp: 5500,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'The park - Friends meet revived ET',
//     timestamp: 5600,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'BIKE CHASE',
//     timestamp: 5700,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'FLYING BIKES',
//     timestamp: 5800,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Spaceship returns - Goodbyes',
//     timestamp: 5900,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
//   {
//     id: generateUUID(),
//     description: 'Spaceship takes off - end on Elliott',
//     timestamp: 6250,
//     notes: '',
//     created_at: (new Date()).toString(),
//   },
// ] as Moment[];

const mockState = [
    {
        "id": "generated_uuid_1",
        "description": "Opening crawl and space battle introduction",
        "timestamp": 72.01,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_2",
        "description": "R2-D2 and C-3PO escape to Tatooine with Princess Leia's message",
        "timestamp": 720.1,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_3",
        "description": "Luke Skywalker finds R2-D2 and C-3PO and discovers Leia's message",
        "timestamp": 1440.2,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_4",
        "description": "Luke meets Obi-Wan Kenobi ('Ben' Kenobi)",
        "timestamp": 1800.25,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_5",
        "description": "Luke decides to join Obi-Wan on his mission after finding his aunt and uncle killed",
        "timestamp": 2160.3,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_6",
        "description": "The group meets Han Solo and Chewbacca at the Mos Eisley Cantina",
        "timestamp": 2880.4,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_7",
        "description": "The Millennium Falcon escapes Tatooine",
        "timestamp": 3240.45,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_8",
        "description": "The group arrives at Alderaan's coordinates, finds it destroyed, and gets pulled into the Death Star",
        "timestamp": 4320.6,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_9",
        "description": "Rescue of Princess Leia from the Death Star",
        "timestamp": 5400.75,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_10",
        "description": "Obi-Wan's duel with Darth Vader, and his subsequent death",
        "timestamp": 6120.85,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_11",
        "description": "Rebel assault on the Death Star and Luke's use of the Force to destroy it",
        "timestamp": 6840.95,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    }
]

// Define the initial state using that type
const initialState = mockState as Moment[];
const emptyState = [] as Moment[];

// TODO: handle the supabase calls here as well?
export const momentsSlice = createSlice({
  name: 'moments',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMoment: {
      reducer: (state, action: PayloadAction<Moment>) => {
        state.push(action.payload);
      },
      prepare: (description: string, notes: string, timestamp: number) => ({
        payload: {
          id: generateUUID(),
          description,
          timestamp,
          notes,
          created_at: (new Date()).toString(),
        } as Moment,
      }),
    },
    removeMoment(state, action: PayloadAction<string>) {
      return state.filter(moment => moment.id !== action.payload)
    },
    clearMoments: (state) =>  {
      return emptyState;
    },
  }
})

export const { addMoment, removeMoment, clearMoments } = momentsSlice.actions

export default momentsSlice.reducer