import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { Textarea } from '../components/ui/Input';

const ResumeBuilder = ({ navigateToPage }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: ''
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: ''
    }
  ]);

  const [skills, setSkills] = useState({
    technical: [],
    soft: [],
    languages: []
  });

  const [newSkill, setNewSkill] = useState({ category: 'technical', skill: '' });
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional design' },
    { id: 'creative', name: 'Creative', description: 'Bold and eye-catching layout' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant style' }
  ];

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    setExperience(prev => [...prev, {
      id: Date.now(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const updateExperience = (id, field, value) => {
    setExperience(prev => prev.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const removeExperience = (id) => {
    setExperience(prev => prev.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    setEducation(prev => [...prev, {
      id: Date.now(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: ''
    }]);
  };

  const updateEducation = (id, field, value) => {
    setEducation(prev => prev.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id) => {
    setEducation(prev => prev.filter(edu => edu.id !== id));
  };

  const addSkill = () => {
    if (newSkill.skill.trim()) {
      setSkills(prev => ({
        ...prev,
        [newSkill.category]: [...prev[newSkill.category], newSkill.skill.trim()]
      }));
      setNewSkill({ category: 'technical', skill: '' });
    }
  };

  const removeSkill = (category, skillToRemove) => {
    setSkills(prev => ({
      ...prev,
      [category]: prev[category].filter(skill => skill !== skillToRemove)
    }));
  };

  const generateAIResume = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setPersonalInfo(prev => ({
        ...prev,
        summary: "Highly motivated and skilled professional with expertise in modern technologies and a passion for innovation. Proven track record of delivering exceptional results and contributing to team success."
      }));
      setIsGenerating(false);
      alert('AI Resume Generated! Check the summary section.');
    }, 2000);
  };

  const downloadResume = () => {
    const printContent = document.getElementById('resume-content');
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .resume-header { border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: bold; font-size: 16px; margin-bottom: 10px; }
            .item { margin-bottom: 10px; }
            .item-title { font-weight: bold; }
            .item-subtitle { font-style: italic; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const renderResumePreview = () => {
    return (
      <div id="resume-content" className={`resume-template ${selectedTemplate}`}>
        <div className="resume-header">
          <h1 className="text-3xl font-bold">{personalInfo.fullName || 'Your Name'}</h1>
          <div className="flex flex-wrap gap-4 mt-2 text-sm">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && <span>{personalInfo.github}</span>}
          </div>
          {personalInfo.summary && (
            <div className="mt-4">
              <p>{personalInfo.summary}</p>
            </div>
          )}
        </div>

        {experience.some(exp => exp.title || exp.company) && (
          <div className="section">
            <h2 className="section-title">Experience</h2>
            {experience.map(exp => (
              (exp.title || exp.company) && (
                <div key={exp.id} className="item">
                  <div className="item-title">{exp.title}</div>
                  <div className="item-subtitle">{exp.company} | {exp.location}</div>
                  <div className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                  {exp.description && <p className="mt-1">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {education.some(edu => edu.degree || edu.institution) && (
          <div className="section">
            <h2 className="section-title">Education</h2>
            {education.map(edu => (
              (edu.degree || edu.institution) && (
                <div key={edu.id} className="item">
                  <div className="item-title">{edu.degree}</div>
                  <div className="item-subtitle">{edu.institution} | {edu.location}</div>
                  <div className="text-sm">{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</div>
                  {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
                </div>
              )
            ))}
          </div>
        )}

        {(skills.technical.length > 0 || skills.soft.length > 0 || skills.languages.length > 0) && (
          <div className="section">
            <h2 className="section-title">Skills</h2>
            {skills.technical.length > 0 && (
              <div>
                <strong>Technical:</strong> {skills.technical.join(', ')}
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <strong>Soft Skills:</strong> {skills.soft.join(', ')}
              </div>
            )}
            {skills.languages.length > 0 && (
              <div>
                <strong>Languages:</strong> {skills.languages.join(', ')}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page-shell px-4 pb-12">
      <section className="mx-auto grid max-w-6xl gap-8 pt-4">
        <div className="fade-up space-y-6">
          <div className="section-eyebrow">AI Resume Builder</div>
          <div className="space-y-4">
            <h1 className="headline-display max-w-3xl text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl">
              Professional Resume, <span className="gradient-text">AI-powered</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-soft)]">
              Create stunning resumes with AI assistance. Choose templates, add your details, and download professional resumes in minutes.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="xl" onClick={generateAIResume} disabled={isGenerating}>
              {isGenerating ? 'Generating...' : 'Generate with AI'}
            </Button>
            <Button variant="outline" size="xl" onClick={downloadResume}>
              Download Resume
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {templates.map(template => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`cursor-pointer rounded-[20px] p-4 border-2 transition-all ${
                  selectedTemplate === template.id
                    ? 'border-[var(--primary-500)] bg-[var(--primary-50)]'
                    : 'border-[var(--border)] hover:border-[var(--primary-300)]'
                }`}
              >
                <div className="font-semibold">{template.name}</div>
                <div className="text-sm text-[var(--foreground-soft)]">{template.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Card padding="lg" className="fade-up">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Add your basic contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  placeholder="Full Name"
                  value={personalInfo.fullName}
                  onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                />
                <Input
                  placeholder="Phone"
                  value={personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={personalInfo.location}
                  onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                />
                <Input
                  placeholder="Website"
                  value={personalInfo.website}
                  onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                />
                <Input
                  placeholder="LinkedIn"
                  value={personalInfo.linkedin}
                  onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Professional Summary"
                value={personalInfo.summary}
                onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          <Card padding="lg" className="fade-up">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Experience</CardTitle>
                <CardDescription>Add your work experience</CardDescription>
              </div>
              <Button onClick={addExperience} size="sm">Add Experience</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id} className="border rounded-[16px] p-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                      placeholder="Job Title"
                      value={exp.title}
                      onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                    />
                    <Input
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    />
                    <Input
                      placeholder="Location"
                      value={exp.location}
                      onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                    />
                    <Input
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    />
                  </div>
                  <Textarea
                    placeholder="Job Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    rows={3}
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                    />
                    <label htmlFor={`current-${exp.id}`}>Currently working here</label>
                  </div>
                  {experience.length > 1 && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeExperience(exp.id)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card padding="lg" className="fade-up">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>Add your educational background</CardDescription>
              </div>
              <Button onClick={addEducation} size="sm">Add Education</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map(edu => (
                <div key={edu.id} className="border rounded-[16px] p-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    />
                    <Input
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    />
                    <Input
                      placeholder="Location"
                      value={edu.location}
                      onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    />
                    <Input
                      placeholder="GPA"
                      value={edu.gpa}
                      onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`edu-current-${edu.id}`}
                      checked={edu.current}
                      onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                    />
                    <label htmlFor={`edu-current-${edu.id}`}>Currently studying</label>
                  </div>
                  {education.length > 1 && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeEducation(edu.id)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card padding="lg" className="fade-up">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your technical and soft skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                  className="px-3 py-2 border rounded-[12px]"
                >
                  <option value="technical">Technical</option>
                  <option value="soft">Soft Skills</option>
                  <option value="languages">Languages</option>
                </select>
                <Input
                  placeholder="Add skill"
                  value={newSkill.skill}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, skill: e.target.value }))}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <Button onClick={addSkill}>Add</Button>
              </div>
              
              {Object.entries(skills).map(([category, skillList]) => (
                skillList.length > 0 && (
                  <div key={category}>
                    <h4 className="font-semibold capitalize mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map(skill => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="cursor-pointer"
                          onClick={() => removeSkill(category, skill)}
                        >
                          {skill} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card padding="lg" className="fade-up sticky top-24">
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>See how your resume looks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-[16px] p-6 shadow-sm border">
                {renderResumePreview()}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ResumeBuilder;
