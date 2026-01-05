/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {getAIToursSuggestions} from "@/src/services/public/tours.service";
import {Button} from "../ui/button";
import {Textarea} from "../ui/textarea";
import {Loader2, Sparkles, MapPin, Clock, DollarSign} from "lucide-react";
import {useState} from "react";
import {toast} from "sonner";

export default function AIToursSuggestion() {
  const [preferences, setPreferences] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleGetSuggestion = async () => {
    if (!preferences.trim() || preferences.trim().length < 10) {
      toast.error("Please describe your travel preferences (at least 10 characters)");
      return;
    }

    setIsLoading(true);
    setSuggestions([]);

    try {
      const response = await getAIToursSuggestions({preferences});

      if (response.success) {
        // Expecting JSON array of tours
        setSuggestions(response.data || []);
        setPreferences("");
      } else {
        toast.error(response.message || "Failed to get AI suggestion");
      }
    } catch (error) {
      console.error("Error getting AI suggestion:", error);
      toast.error("Failed to get AI suggestion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl pt-5 mx-auto space-y-8 max-md:px-5 px-5 max-xl:mx-10 max-md:mx-0">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl max-md:text-xl font-bold text-chart-5 flex items-center justify-center gap-2 max-md:mt-3">
          <Sparkles className="h-6 w-6 text-chart-5" />
          AI Tour Recommendations
        </h2>
        <p className="text-muted-foreground">Describe your travel preferences and let AI suggest the best tours for you</p>
      </div>

      {/* Input */}
      <div className="shadow-sm rounded-lg p-6 space-y-4 border max-md:text-sm">
        <Textarea
          placeholder="E.g., cultural tour in Dhaka, budget friendly, short duration..."
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          rows={4}
          className="resize-none max-md:text-sm"
          disabled={isLoading}
        />
        <p className="text-xs text-muted-foreground">{preferences.length} characters</p>

        <Button
          onClick={handleGetSuggestion}
          disabled={isLoading || preferences.trim().length < 10}
          className="w-full bg-chart-3 hover:bg-chart-4 text-white cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing preferences...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Get Recommendations
            </>
          )}
        </Button>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="grid gap-6 max-md:gap-3 md:grid-cols-2">
          {suggestions.map((tour: any) => (
            <div
              key={tour.id}
              className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg shadow-sm p-6 max-md:p-4 hover:shadow-md transition"
            >
              <h3 className="text-xl max-md:text-lg font-semibold text-chart-5">{tour.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{tour.description}</p>

              <div className="mt-4 space-y-2 max-md:space-y-1 text-sm text-chart-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-chart-5" />
                  Fee: {tour.tourFee}৳
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-chart-5" />
                  Duration: {tour.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-chart-5" />
                  Destination: {tour.destination}, {tour.city}
                </div>
              </div>

              {tour.guide && (
                <div className="mt-4 text-sm text-gray-700">
                  <span className="font-medium">Guide:</span> {tour.guide.name}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
