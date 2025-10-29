

export interface HexacoQuestion {

    question: string;
    facet: HexacoFacet;
    reverse: boolean;
    dimension: string;
    weight: number;
    responseType: string;
    version: number;
    active?: boolean;
}
export interface BASE_TEST_QUESTIONS {

    Factor: string;
    question: string;
}
export type HexacoFactors = [{'Honesty-Humility':'Sincerity' | 'Fairness' | 'Greed-Avoidance' | 'Modesty'},
    {'Emotionality':'Fearfulness' | 'Anxiety' | 'Dependence' | 'Sentimentality'},
    {'Extraversion':'Social Self-Esteem' | 'Social Boldness' | 'Sociability' | 'Liveliness' },
    {'Agreeableness':'Forgiveness' | 'Gentleness' | 'Flexibility' | 'Patience'},
    {'Conscientiousness':'Organization' | 'Diligence' | 'Perfectionism' | 'Prudence'},
    {'Openness to Experience':'Aesthetic Appreciation' | 'Inquisitiveness' | 'Creativity' | 'Unconventionality'}]


export type HexacoFacet =
    | 'Sincerity' | 'Fairness' | 'Greed-Avoidance' | 'Modesty'
    | 'Fearfulness' | 'Anxiety' | 'Dependence' | 'Sentimentality'
    | 'Social Self-Esteem' | 'Social Boldness' | 'Sociability' | 'Liveliness'
    | 'Forgiveness' | 'Gentleness' | 'Flexibility' | 'Patience'
    | 'Organization' | 'Diligence' | 'Perfectionism' | 'Prudence'
    | 'Aesthetic Appreciation' | 'Inquisitiveness' | 'Creativity' | 'Unconventionality';




export const BASE_TEST_QUESTIONS: Record<number, HexacoQuestion> = {
    1: { question: 'I would be quite bored by a visit to an art gallery.', facet:'Sincerity', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true  },
    2: { question: 'I plan ahead and organize things, to avoid scrambling at the last minute.', facet:'Organization', reverse: false, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true },
    3: { question: 'I rarely hold a grudge, even against people who have badly wronged me.', facet:'Forgiveness', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true },
    4: { question: 'I feel reasonably satisfied with myself overall.',facet:'Social Self-Esteem', reverse: false, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true },
    5: { question: 'I would feel afraid if I had to travel in bad weather conditions.', facet:'Fearfulness', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    6: { question: 'I wouldn\'t use flattery to get a raise or promotion at work, even if I thought it would succeed.', facet:'Sincerity', reverse: false, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    7: { question: 'I\'m interested in learning about the history and politics of other countries.',facet:'Inquisitiveness', reverse: false, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    8: { question: 'I often push myself very hard when trying to achieve a goal.', facet:'Diligence', reverse: false, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    9: { question: 'People sometimes tell me that I am too critical of others.', facet:'Gentleness', reverse: true, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    10: { question: 'I rarely express my opinions in group meetings.', facet:'Social Boldness', reverse: true, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    11: { question: 'I sometimes can\'t help worrying about little things.', facet:'Anxiety', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    12: { question: 'If I knew that I could never get caught, I would be willing to steal a million dollars.', facet:'Fairness', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    13: { question: 'I would enjoy creating a work of art, such as a novel, a song, or a painting.', facet:'Creativity', reverse: false, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    14: { question: 'When working on something, I don\'t pay much attention to small details.',facet:'Perfectionism', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    15: { question: 'People sometimes tell me that I\'m too stubborn.',facet:'Flexibility', reverse: true, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    16: { question: 'I prefer jobs that involve active social interaction to those that involve working alone.',facet:'Sociability', reverse: false, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    17: { question: 'When I suffer from a painful experience, I need someone to make me feel comfortable.',facet:'Dependence', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    18: { question: 'Having a lot of money is not especially important to me.',facet:'Greed-Avoidance', reverse: false, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    19: { question: 'I think that paying attention to radical ideas is a waste of time.',facet:'Unconventionality', reverse: true, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    20: { question: 'I make decisions based on the feeling of the moment rather than on careful thought.', facet:'Prudence', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    21: { question: 'People think of me as someone who has a quick temper.', facet:'Patience', reverse: true, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    22: { question: 'On most days, I feel cheerful and optimistic.', facet:'Liveliness', reverse: false, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    23: { question: 'I feel like crying when I see other people crying.',facet:'Sentimentality', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    24: { question: 'I think that I am entitled to more respect than the average person is.',facet:'Modesty', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    25: { question: 'If I had the opportunity, I would like to attend a classical music concert.', facet:'Aesthetic Appreciation', reverse: false, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    26: { question: 'When working, I sometimes have difficulties due to being disorganized.',facet:'Organization', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    27: { question: 'My attitude toward people who have treated me badly is “forgive and forget".',facet:'Forgiveness', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    28: { question: 'I feel that I am an unpopular person.',facet:'Social Self-Esteem', reverse: true, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    29: { question: 'When it comes to physical danger, I am very fearful.',facet:'Fearfulness', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    30: { question: 'If I want something from someone, I will laugh at that person\'s worst jokes.',facet:'Sincerity', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    31: { question: 'I’ve never really enjoyed looking through an encyclopedia.',facet:'Inquisitiveness', reverse: true, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    32: { question: 'I do only the minimum amount of work needed to get by.',facet:'Diligence', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    33: { question: 'I tend to be lenient in judging other people.',facet:'Gentleness', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    34: { question: 'In social situations, I’m usually the one who makes the first move.',facet:'Social Boldness', reverse: false, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    35: { question: 'I worry a lot less than most people do.', facet:'Anxiety', reverse: true, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    36: { question: 'I would never accept a bribe, even if it were very large.',facet:'Fairness', reverse: false, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    37: { question: 'People have often told me that I have a good imagination.', facet:'Creativity', reverse: false, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    38: { question: 'I always try to be accurate in my work, even at the expense of time.', facet:'Perfectionism', reverse: false, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    39: { question: 'I am usually quite flexible in my opinions when people disagree with me.', facet:'Flexibility', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    40: { question: 'The first thing that I always do in a new place is to make friends.', facet:'Sociability', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    41: { question: 'I can handle difficult situations without needing emotional support from anyone else.', facet:'Dependence', reverse: true, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    42: { question: 'I would get a lot of pleasure from owning expensive luxury goods.', facet:'Greed-Avoidance', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    43: { question: 'I like people who have unconventional views.', facet:'Unconventionality', reverse: false, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    44: { question: 'I make a lot of mistakes because I don’t think before I act.', facet:'Prudence', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    45: { question: 'Most people tend to get angry more quickly than I do.', facet:'Patience', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    46: { question: 'Most people are more upbeat and dynamic than I generally am.', facet:'Liveliness', reverse: true, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    47: { question: 'I feel strong emotions when someone close to me is going away for a long time.', facet:'Sentimentality', reverse: false, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    48: { question: 'I want people to know that I am an important person of high status.', facet:'Modesty', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    49: { question: 'I don’t think of myself as the artistic or creative type', facet:'Creativity', reverse: true, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    50: { question: 'People often call me a perfectionist.', facet:'Perfectionism', reverse: false, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    51: { question: 'Even when people make a lot of mistakes, I rarely say anything negative.', facet:'Gentleness', reverse: false, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    52: { question: 'I sometimes feel that I am a worthless person.', facet:'Social Self-Esteem', reverse: true, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    53: { question: 'Even in an emergency I wouldn’t feel like panicking.', facet:'Fearfulness', reverse: true, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    54: { question: 'I wouldn’t pretend to like someone just to get that person to do favors for me.', facet:'Sincerity', reverse: false, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},
    55: { question: 'I find it boring to discuss philosophy.', facet:'Unconventionality', reverse: true, dimension: 'O', weight: 1, responseType: 'likert', version: 1, active: true},
    56: { question: 'I prefer to do whatever comes to mind, rather than stick to a plan.', facet:'Prudence', reverse: true, dimension: 'C', weight: 1, responseType: 'likert', version: 1, active: true},
    57: { question: 'When people tell me that I’m wrong, my first reaction is to argue with them.', facet:'Flexibility', reverse: true, dimension: 'A', weight: 1, responseType: 'likert', version: 1, active: true},
    58: { question: 'When I’m in a group of people, I’m often the one who speaks on behalf of the group.', facet:'Social Boldness', reverse: false, dimension: 'X', weight: 1, responseType: 'likert', version: 1, active: true},
    59: { question: 'I remain unemotional even in situations where most people get very sentimental.', facet:'Sentimentality', reverse: true, dimension: 'E', weight: 1, responseType: 'likert', version: 1, active: true},
    60: { question: 'I’d be tempted to use counterfeit money, if I were sure I could get away with it.', facet:'Fairness', reverse: true, dimension: 'H', weight: 1, responseType: 'likert', version: 1, active: true},

};




