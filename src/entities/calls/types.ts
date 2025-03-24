export interface ICall {
    id: number;
    partnership_id: string;
    partner_data: {
        id: string;
        name: string;
        phone: string;
    };
    date: string;
    date_notime: string;
    time: number;
    from_number: string;
    from_extension: string;
    to_number: string;
    to_extension: string;
    is_skilla: number;
    status: 'Дозвонился' | 'Не дозвонился';
    record: string;
    line_number: string;
    line_name: string;
    in_out: 0 | 1;
    from_site: number;
    source: string;
    errors: string[];
    disconnect_reason: string;
    results: any[];
    stages: any[];
    abuse?: {
        date: string;
        person_name: string;
        message: string;
        support_read_status: number;
        support_answer_status: number;
        answers: {
            message: string;
            from_support: number;
            support_read_status: number;
            person_read_status: number;
        }[];
    };
    contact_name: string;
    contact_company: string;
    person_id: number;
    person_name: string;
    person_surname: string;
    person_avatar: string;
    type: 'Incoming' | 'Outgoing' | 'Missed' | 'NoAnswer';
    rating: number;
}

export enum CallType {
    Incoming = 'входящий',
    Outgoing = 'исходящий',
    Missed = 'пропущенный',
    NoAnswer = 'недозвон'
}

export interface IError {
    errorStatus: boolean,
    errorMessage: string | null
}

export interface CallsState {
    calls: ICall[],
    callsLoading: boolean,
    callsError: IError,
    totalRows: number
}

export interface IGetCallsParams {
    today: string
}

export interface ICallsResponse {
    results: ICall[];
    total_rows: number;
}

export interface TransformedCallsResponse {
    calls: ICall[];
    totalRows: number;
}

export interface CallRate {
    rate: 'rating not used' | 'bad' | 'ok' | 'perfect'
}