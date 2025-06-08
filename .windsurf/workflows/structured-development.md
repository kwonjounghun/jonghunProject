---
description: structured_development
---

# Structured Development Workflow

## 1. Task Scope Analysis Phase

### 1.1 Identify Large Tasks

- Review if the requested task can be broken down into smaller subtasks
- Automatically suggest splitting if the task is estimated to take more than 8 hours

### 1.2 Task Breakdown Suggestion (When Needed)

[Task Breakdown Example]

1. [FeatureA] Implement basic component structure
2. [FeatureA] Add state management logic
3. [FeatureA] API integration
4. [FeatureA] Write test cases

## 2. Development Initiation Phase

### 2.1 Create Branch

- Create a branch using `feature/[task-name]` format
- Example: `feature/add-user-authentication`

### 2.2 Develop Work Plan

- **Requirements Analysis**: [Summary of requested task]
- **Reasoning**: [Technical/Business context]
- **Potential Issues**: [Anticipated challenges]
- **Implementation Plan**:
  1. [Specific step 1]
  2. [Specific step 2]
  3. [Specific step 3]

## 3. Development Execution Phase

### 3.1 Incremental Implementation

- Implement features incrementally
- Request mid-development reviews when necessary

### 3.2 Automated Checks

- Code quality checks
- Test execution
- Build verification

## 4. Code Review & Completion Phase

### 4.1 Review Changes

- List of modified files
- Summary of key changes
- Areas requiring special attention

### 4.2 Suggested Commit Message

[Type]: [Brief title] (max 50 chars)

[Detailed description] (wrap at 72 chars)

Detailed explanation of changes
Fixed issue number (if applicable)
[Notes] (if needed)

Important changes to note
Migration instructions if applicable

### 4.3 PR Template Suggestion

```markdown
## Changes

- [ ] Change 1
- [ ] Change 2

## Testing

- [ ] Test case 1
- [ ] Test case 2

## Related Issues

- close #issue-number

5. Post-Completion Steps
   Create PR and request review
   Address code review feedback
   Merge to main branch
   Deploy (if applicable)
```
