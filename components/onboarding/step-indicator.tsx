interface StepIndicatorProps {
  steps: { id: string; label: string }[]
  currentStep: string
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep)

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center sm:flex-1">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              index <= currentIndex ? "bg-primary text-primary-foreground" : "bg-input text-muted-foreground"
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-3">
            <p className="text-xs sm:text-sm font-medium">{step.label}</p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`hidden sm:block flex-1 h-1 mx-4 rounded transition-all ${index < currentIndex ? "bg-primary" : "bg-input"}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
