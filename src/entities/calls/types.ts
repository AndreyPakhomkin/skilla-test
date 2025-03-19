export interface ICall {
    id: string,
    partnership_id: string,
    in_out: 0 | 1,
    status: 'Дозвонился' | 'Не дозвонился',
    date: string,
    date_notime: string,
    time: string,
    from_number: string,
    to_number: string,
    person_id: string,
    person_name: string,
    person_surname: string,
    person_avatar: string,
    line_name: string,
    rate: number,
    record: string,
}

export interface IError {
    errorStatus: boolean,
    errorMessage: string | null
}

export interface CallsState {
    calls: ICall[],
    callsLoading: boolean,
    callsError: IError
}

export interface IGetCallsParams {
    today: string,
    body: {
        token: string | undefined
    }
}