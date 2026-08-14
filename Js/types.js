export let LessonType = /*#__PURE__*/function (LessonType) {
  LessonType["HIRAGANA"] = "HIRAGANA";
  LessonType["KATAKANA"] = "KATAKANA";
  LessonType["GRAMMAR"] = "GRAMMAR";
  LessonType["VOCABULARY"] = "VOCABULARY";
  LessonType["PRACTICE"] = "PRACTICE";
  LessonType["CULTURE"] = "CULTURE";
  LessonType["REVIEW"] = "REVIEW";
  LessonType["KANJI"] = "KANJI";
  return LessonType;
}({});
export let ContentBlockType = /*#__PURE__*/function (ContentBlockType) {
  ContentBlockType["TEXT"] = "TEXT";
  ContentBlockType["KANA_INFO"] = "KANA_INFO";
  ContentBlockType["VOCABULARY_LIST"] = "VOCABULARY_LIST";
  ContentBlockType["GRAMMAR_EXPLANATION"] = "GRAMMAR_EXPLANATION";
  ContentBlockType["GEMINI_PRACTICE"] = "GEMINI_PRACTICE";
  // Will be phased out by AI_TUTOR_STREAM
  ContentBlockType["CULTURAL_NOTE"] = "CULTURAL_NOTE";
  ContentBlockType["FILL_IN_THE_BLANK_EXERCISE"] = "FILL_IN_THE_BLANK_EXERCISE";
  ContentBlockType["WRITING_PRACTICE"] = "WRITING_PRACTICE";
  ContentBlockType["PRONUNCIATION_PRACTICE"] = "PRONUNCIATION_PRACTICE";
  // Will be phased out by AI_TUTOR_STREAM
  ContentBlockType["AI_TUTOR_STREAM"] = "AI_TUTOR_STREAM";
  // New type for interactive AI tutor
  ContentBlockType["INTERESTING_FACT"] = "INTERESTING_FACT"; // New type for interesting facts/stories
  return ContentBlockType;
}({});

// Added new block type

export let SrsLevel = /*#__PURE__*/function (SrsLevel) {
  SrsLevel[SrsLevel["NEW"] = 0] = "NEW";
  SrsLevel[SrsLevel["LEARNING"] = 1] = "LEARNING";
  SrsLevel[SrsLevel["KNOWN"] = 2] = "KNOWN";
  SrsLevel[SrsLevel["MASTERED"] = 3] = "MASTERED";
  return SrsLevel;
}({});

// For AiTutorStream component