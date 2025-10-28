interface StepIndicatorProps {
  steps: { id: string; label: string }[]
  currentStep: string
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep)

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              index <= currentIndex ? "bg-primary text-primary-foreground" : "bg-input text-muted"
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{step.label}</p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-4 rounded transition-all ${index < currentIndex ? "bg-primary" : "bg-input"}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
