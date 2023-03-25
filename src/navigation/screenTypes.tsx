export enum APP_SCREEN {
  All_FILMS = 'All_FILMS',
  SPLASH = 'SPLASH',
  FILMS = 'FILMS'
}

export type RootStackParamList = {
  [APP_SCREEN.All_FILMS]: undefined
  [APP_SCREEN.SPLASH]: undefined
  [APP_SCREEN.FILMS]: {
    id: string,
    headerName: string
  }
}

export type RootStackParamListType = keyof RootStackParamList
